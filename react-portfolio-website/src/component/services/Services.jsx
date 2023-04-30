import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>Frontend development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, CSS, JavaScript and React js to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing software workflow.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website & Social Engagement Videos</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Writing Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Production/Cinematography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Paid Content Asset Promotion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Marketing Services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Editing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services