import React from 'react'
import './Footer.css'
import BannerLogo from '../../Assets/Images/navigation-logo-image.png'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='footer' >
        <div>
          Developed by <a href='https://github.com/shivakumar7799' >Shiva kumar</a>
        </div>
        <div>
          <div className='logo-footer' >
            <img src={BannerLogo} alt="banner-logo" />
            <div>
              <CopyrightIcon /> 2023
            </div>
          </div>
        </div>
        <div>
          <p>Fork this project  <a href="https://github.com/shivakumar7799" > HERE</a></p>
        </div>
      </div>
  )
}

export default Footer