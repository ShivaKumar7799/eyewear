import React from 'react'
import './Homepage.css'
import BannerImage from '../../Assets/Images/home-banner.png'
import { Link } from 'react-router-dom'
import { featureProductsData } from '../../data/FeatureProductsData'
import Footer from '../../Components/Footer/Footer'

function HomePage() {
  console.log(featureProductsData)
  return (
   <>
     <div className='homepage-container' >
      <div className='banner' >
        <div className='banner-content' >
          <h1>See everything <br /> with Clarity</h1>
          <p>Buying eyewear should leave you happy and good-looking, with money 
            in your pocket. Glasses, sunglasses, and contacts—we've 
            got your eyes covered.
          </p>
          <button className='banner-button' >Shop Now</button>
        </div>
        <div className='banner-image' >
          <img src={BannerImage} width="100%" height="100%" alt="home-banner" />
        </div>
      </div>
      <div className='featured-display display' >
        <div className='display-header' >
          <h1>Featured Products</h1>
          <Link to='/featured' >See All</Link>
        </div>
        <div className='product-display-grid' >
          {featureProductsData.map((item,index)  => <div className='product-card' >
              <div className='product-image' >
                <img width="100%" src={item.image} alt={item.title} />
              </div>
              <div className='product-content' >
                <h2>{item.title}</h2>
                <p><em>{item.subTitle}</em></p>
              </div>
             </div> )}
        </div>
      </div>
      <div className='recomended-display display' >
      <div className='display-header' >
          <h1>Recommended Products</h1>
          <Link to='/recomended' >See All</Link>
        </div>
        <div className='product-display-grid' >
          {featureProductsData.map((item,index)  => <div className='product-card' >
              <div className='product-image' >
                <img width="100%" src={item.image} alt={item.title} />
              </div>
              <div className='product-content' >
                <h2>{item.title}</h2>
                <p><em>{item.subTitle}</em></p>
              </div>
             </div> )}
        </div>
      </div>
    </div>
    <Footer />
   </>
  )
}

export default HomePage