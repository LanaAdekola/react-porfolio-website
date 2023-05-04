import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVTR1.png'
import AVTR2 from '../../assets/AVTR2.png'
import AVTR3 from '../../assets/AVTR3.png'
import AVTR4 from '../../assets/AVRT4.jpg'

// import Swiper core and required modules
import {Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: AVTR1,
    names: 'Babatunde Ogunseye',
    review: 'Adekola Adelana is no ordinary 25 year old. In one summer, he taught himself to code.'
  },
  {
    avatar: AVTR2,
    names: 'Anjuwon Tobi',
    review: 'I have worked with Ade on two complex projects and in both cases, the work was done on time, and with a high degree of professionalism.'
  },
  {
    avatar: AVTR3,
    names: 'Olajoye Femi',
    review: '...throughout the entire process he is responsive, and willing to work through issues as they arise. It’s obvious he takes tremendous pride in his work, and I would not hesitate to recommend him.'
  },
  {
    avatar: AVTR4,
    names: 'Honestmindsart',
    review: 'Across the board, everyone enjoyed working with Adekola. He not only did exceptional work based on the specs we gave him for each project, but he also gave input on how to make the end product even better and cared about how users would engage with the builds. I will be using Adekola again in the future and would highly recommend his services to anyone'
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