import React from 'react'
import './Rating.css'

const Rating = props => {
  let n = 0
  let starArray = new Array(5).fill('gray')
                              .fill('full', 0, Number(props.stars[0]))
  return (
    <span className='Rating'>
      {
        props.stars === '00'
        ? null
        : (<span className='stars'>
          {starArray.map(item => (
            <span key={n++} className={`star ${item}`}></span>
          ))}
        </span>)
      }
      <span className='average'>
        {props.average ? props.average : '暂无评分' }
      </span>
    </span>
  )
}

Rating.defaultProps = {
  average: 0,
  stars: '00'
}

export default Rating
