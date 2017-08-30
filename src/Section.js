import React, { Component } from 'react'
import Rating from './Rating'
import './Section.css'

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subjects: []
    }
  }

  render() {
    return (
      <section>
        <header>
          <h2>{this.state.title}</h2>
          <a href='#'>更多</a>
        </header>
        <ul className='items'>
          {/* <li className='item'>
            <a href='#'>
              <img src={this.state.} />
              <h3>星际特工: 千星之城</h3>
              <Rating average={7.1} stars={3} />
            </a>
          </li> */}
          {this.state.subjects.map(item => (
            <li className='item' key={item.id}>
              <a href='#'>
                <img alt={item.title} src={item.images.medium} />
                <h3>{item.title}</h3>
                <Rating average={item.rating.average}
                        stars={Number(item.rating.stars[0])} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  componentDidMount() {
    fetch(`/v2/movie/${this.props.value}?count=8`)
    .then(res => res.json())
    .then(data => this.setState({
      title: data.title,
      subjects: data.subjects
    }))
  }
}

export default Section
