import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const data = [
  {
    avatar: AVTR1,
    names: 'Honestmindsart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam inventore neque recusandae quae vero dolorum commodi. Veritatis, debitis enim alias architecto delectus nobis non esse dicta aspernatur, nam tempore!'
  },
  {
    avatar: AVTR2,
    names: 'Honestmindsart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam inventore neque recusandae quae vero dolorum commodi. Veritatis, debitis enim alias architecto delectus nobis non esse dicta aspernatur, nam tempore!'
  },
  {
    avatar: AVTR3,
    names: 'Honestmindsart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam inventore neque recusandae quae vero dolorum commodi. Veritatis, debitis enim alias architecto delectus nobis non esse dicta aspernatur, nam tempore!'
  },
  {
    avatar: AVTR4,
    names: 'Honestmindsart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam inventore neque recusandae quae vero dolorum commodi. Veritatis, debitis enim alias architecto delectus nobis non esse dicta aspernatur, nam tempore!'
  },
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map((avatar, names, review ) => {
          <article className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={names} />
            </div>
            <h5 className='client__name'>{names}</h5>
            <small className='client__review'>
              {review}
            </small>
          </article>
        })}
      </div>
    </section>
  )
}

export default Testimonials