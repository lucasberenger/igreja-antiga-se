import React from 'react'
import './SocialMedia.modules.css'

import { InstagramEmbed } from 'react-social-media-embed';
import { FacebookEmbed } from 'react-social-media-embed';

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialMedia = () => {

  return (
    <>
      <div className="instagram-container">

        <div className="instagram-container_text">
          <h2>Siga a Igreja <br />
            <a href="https://www.facebook.com/igrejaantigase" target='blank'><FaFacebookSquare/></a> 
            <a href="https://www.instagram.com/igrejaantigase/" target='blank'><FaInstagram/></a></h2>
        </div>

        <InstagramEmbed url="https://www.instagram.com/p/C4tVubKJBzj/?img_index=1" captioned/>

        <FacebookEmbed url='https://www.facebook.com/igrejaantigase/posts/pfbid0pSSsUhyVZ5fsrCXgUxu9Bfkz9Xkas85usEKK7cfNwugQn5PoddSRiJefXDEiCbPtl'captioned/>
        
      </div>
    </>
  )
}

export default SocialMedia