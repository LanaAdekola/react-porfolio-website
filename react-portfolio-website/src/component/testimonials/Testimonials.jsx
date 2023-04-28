import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    names: 'Honestmindsart',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam inventore neque recusandae quae vero dolorum commodi. Veritatis, debitis enim alias architecto delectus nobis non esse dicta aspernatur, nam tempore!'
  },
  {
    avatar: AVTR2,
    names: 'Babs',
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

      <Swiper className="container testimonials__container"     
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar, names, review }, index) => {
          return (
          <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt={names} />
            </div>
            <h5 className='client__name'>{names}</h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials