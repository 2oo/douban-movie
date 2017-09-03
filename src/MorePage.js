import React, { Component } from 'react'
import Movie from './Movie'
import Loading from './Loading'
import './MorePage.css'

class MorePage extends Component {
  constructor(props) {
    super(props)
    this.state = { all: [] }
  }

  render() {
    if (this.state.all.length === 0) return <Loading />
    return (
      <main id='MorePage'>
        <h1>{this.state.all[0].title}</h1>
        <div className='movies'>
          {this.state.all.map(movieGroup => (
            movieGroup.subjects.map(i => (
              <Movie key={i.id}
                     title={i.title}
                     img={i.images.medium}
                     rating={i.rating}
              />
            ))
          ))}
        </div>
      </main>
    )
  }

  componentDidMount() {
    const get = (n = 0) => {
      fetch(`/v2/movie/${this.props.match.params.topic}?start=${n}`)
      .then(req => req.json())
      .then(data => this.setState(prevState => (
        { all: [...prevState['all'], data ] }
      )))
    }

    const listener = e => {
      if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight / 1.3) {
        const latestAll = this.state.all[this.state.all.length - 1]
        const n = latestAll.start + latestAll.count
        get(n)
        // 免费用户只能获得有限的豆瓣api数据
        window.removeEventListener('scroll', listener)
      }
    }

    get()
    window.addEventListener('scroll', listener)
  }
}

export default MorePage
