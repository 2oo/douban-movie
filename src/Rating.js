import React from 'react'
import './Rating.css'

const Rating= ({average = 0, stars = 0}) => {
  if (!average || !stars) { return <div className='rank'>暂无评分</div> }

  let starGroup = new Array(5).fill('gray'),
      n = 0
  starGroup.fill('full', 0, stars)
  return (
    <div className='rank'>
      {starGroup.map(item =>(
        <span key={n++} className={`star ${item}`}></span>
      ))}
      <span>{average}</span>
    </div>
  )
}

export default Rating
