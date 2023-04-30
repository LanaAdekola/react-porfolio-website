import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/adekola-adelana-94393b165/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/LanaAdekola' target='_blank'><BsGithub /></a>
        <a href='https://www.instagram.com/ade_flashcuts/' target='_blank'><BsInstagram/></a>
        <a href='https://twitter.com/adeboy2885' target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials