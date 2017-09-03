import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import './Movie.css'

const Movie = props => (
  <figure className='Movie'>
    <Link to={`/subject/${props.id}`}>
      <img alt={props.title} src={props.img} />
      <figcaption>
        <h3>{props.title}</h3>
        <Rating average={props.rating.average} stars={props.rating.stars} />
      </figcaption>
    </Link>
  </figure>
)

Movie.defaultProps = {
  id: 1292052,
  title: '肖申克的救赎',
  img: 'https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.jpg',
  rating: {max: 10, average: 9.6, stars: "50", min: 0}
}

export default Movie
