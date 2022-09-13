import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const socialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsInstagram/>
        </div>

        <div>
            <FaFacebookF/>
        </div>

        <div>
            <BsTwitter/>
        </div>

    </div>
  )
}

export default socialMedia