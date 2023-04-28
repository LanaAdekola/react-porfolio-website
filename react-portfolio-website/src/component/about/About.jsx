import React from 'react'
import './about.css'
import ME from '../../assets/blackade.png'
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

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, magnam ipsam quia, at pariatur perferendis eius laudantium, ab architecto autem quam nulla laboriosam eaque cum est exercitationem hic incidunt quis!</p>

          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>

     
   </section>
  )
}

export default About