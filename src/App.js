import React, { Component } from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Footer from './Footer'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        'in_theaters',
        'coming_soon',
        'top250',
        // 'us_box',
      ]
    }
  }

  render() {
    return (
      <div id='app'>
        <Navbar />
        {this.state.items.map(item => <Section key={item} value={item} />)}
        <Footer />
      </div>
    )
  }
}

export default App;
