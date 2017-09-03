import React, { Component } from 'react'
import Introduction from './Introduction'
import Loading from './Loading'
import './SubjectPage.css'

class SubjectPage extends Component {
  constructor(props) {
    super(props)
    this.state = { sub: null }
  }

  render() {
    if (!this.state.sub) return <Loading />

    const {
      title,
      summary,
      images,
      rating,
      ratings_count,
    } = this.state.sub
    return (
      <main id='SubjectPage'>
        <Introduction title={title}
                      summary={summary}
                      img={images.medium}
                      rating={rating}
                      ratingsCount={ratings_count}
        />
        <div className='mark'></div>
        <div className='celebrities'></div>
      </main>
    )
  }

  componentDidMount() {
    fetch(`/v2/movie/subject/${this.props.match.params.id}`)
    .then(req => req.json())
    .then(data => this.setState({ sub: data }))
  }
}

export default SubjectPage
