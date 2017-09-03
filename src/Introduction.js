import React from 'react'
import Rating from './Rating'
import './Introduction.css'

const Introduction = props => (
  <figure id='Introduction'>
    <figcaption>
      <h1>{props.title}</h1>
      <Rating average={props.rating.average} stars={props.rating.stars}  />
      <p className='summary'>{props.summary}</p>
    </figcaption>
    <img src={props.img} alt={props.title} />
  </figure>
)

Introduction.defaultProps = {
  title: '敦刻尔克',
  summary: '故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，形势万分危急。英国政府和海军发动大批船员，动员人民起来营救军队。英国士兵汤米（菲昂·怀特海德 Fionn Whitehead 饰）在逃离海滩的过程中相继结识吉布森与亚历克斯，同时民用船主道森先生（马克·里朗斯 Mark Rylance 饰）与儿子彼得、17岁少年乔治也离开英国，去往敦刻尔克拯救士兵。三人陆续搭救了海军（基里安·墨菲 Cillian Murphy 饰）、飞行员柯林斯及汤米一行人，而战斗机飞行员法瑞尔（汤姆·哈迪 Tom Hardy 饰）则在被敌人双面夹击的艰难情形下顽强战斗。影片的故事从陆、海、空三个角度讲述，在德国军队的包围下，每个人不得不为自己的命运背水一战，才有可能活着回家。',
  img: 'http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2494950714.jpg',
  rating: {max: 10, average: 8.3, stars: "45", min: 0},
  ratingCount: 17022
}

export default Introduction
