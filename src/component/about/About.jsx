import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbAward} from 'react-icons/tb'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img  src={ME} alt='about me'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Projects</small>
            </article>
          </div>

          <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>

     
   </section>
  )
}

export default About