import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.jpg'
import IMG2 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/portfolio2.jpg'
import IMG4 from '../../assets/portfolio5.png'
import IMG5 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'War Game with API',
    github: 'https://github.com/LanaAdekola/War-Game',
    demo: 'https://precious-gaufre-8266c5.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Twitter App with Vanilla JavaScript',
    github: 'https://github.com/LanaAdekola/twitter-clone',
    demo: 'https://glittering-lamington-a8d76c.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rest API Project',
    github: 'https://github.com/LanaAdekola/Rest-Api-test',
    demo: 'https://euphonious-parfait-825aed.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'My Portfolio Website',
    github: 'https://github.com/LanaAdekola/react-porfolio-website',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'E-commerce',
    github: '#',
    demo: '#'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className= 'portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary'>GitHub</a>
                  <a href={demo} className='btn btn-primary'>Twitter App</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio