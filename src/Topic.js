import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie'
import Loading from './Loading'
import './Topic.css'

class Topic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subjects: null
    }
  }

  render() {
    if (!this.state.subjects) return <Loading />
    return (
      <section className='Topic'>
        <header>
          <h2>{this.state.title}</h2>
          <Link to={`/more/${this.props.value}`}>更多</Link>
        </header>
        <div className='items'>
          {this.state.subjects.map(i => (
            <Movie key={i.id}
                   id={i.id}
                   title={i.title}
                   img={i.images.medium}
                   rating={i.rating}
            />
          ))}
        </div>
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

export default Topic
