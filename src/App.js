import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar               from './Navbar'
import Topic                from './Topic'
import MorePage             from './MorePage'
import SubjectPage          from './SubjectPage'
import Footer               from './Footer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topicList: [
        'in_theaters',
        'coming_soon',
        'top250'
      ]
    }
  }

  render() {
    return (
      <Router>
        <div id='app'>
          <Navbar />

          <Switch>
            <Route exact path='/' render={() => (
              <div id='Topics'>
                {this.state.topicList.map(i => (
                  <Topic key={i} value={i} />
                ))}
              </div>
            )} />
            <Route path='/more/:topic' component={MorePage} />
            <Route path='/subject/:id' component={SubjectPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
