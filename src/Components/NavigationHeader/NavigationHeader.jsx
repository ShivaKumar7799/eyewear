import React from 'react'
import './NavigationHeader.css'
import NavigationLogo from '../../Assets/Images/navigation-logo-image.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FilterAltTwoToneIcon from '@mui/icons-material/FilterAltTwoTone';
import { Link } from 'react-router-dom';

function NavigationHeader() {
  return (
    <div className='navigation-header-container' >
      <div className='logo' >
        <img src={NavigationLogo} alt="navigation-logo" />
      </div>
      <div className='navigation-menu-main' >
        <div>
          <Link to="/" >Home</Link>
        </div>
        <div>
          <Link to="/shop" >Shop</Link>
        </div>
        <div>
          <Link to ="/featured">Featured</Link>
        </div>
        <div>
          <Link to ="/recomended">Recomended</Link>
        </div>
      </div>
      <div className='nav-block' >
        <div className='filters-toggle' >
          <button > Filters
          <FilterAltTwoToneIcon /></button>
        </div>
        <div className='search-bar' >
          <input type="text" placeholder='Search Product...' />
        </div>
        <div className='navigation-cart-logo' >  
          <ShoppingBagOutlinedIcon />
          <div className='cart-value' >
            1
          </div>
        </div>
      </div>
      <div className='navigation-menu' >
          <button className='signup-button nav-button' >Sign Up</button>
          <button className='signin-button nav-button' >Sign In</button>
      </div>
    </div>
  )
}

export default NavigationHeader