import React from 'react'
import './ShopPage.css'
import Footer from '../../Components/Footer/Footer'

function ShopPage() {
  const handleDisplayButton = () => {
    document.getElementById("card-button").style.display = "block"
  }
  const handleHideButton = () => {
    document.getElementById("card-button").style.display = "none"
  }
  return (
    <div>
      <div className='shop-card-grid' >
      <div className='shop-card' onMouseEnter = {handleDisplayButton} onMouseLeave={handleHideButton} >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button id='card-button' >Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
      <div className='shop-card' >
        <div>
          <img src='https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a' alt='shop-card' />
        </div>
        <div>
          <h5>Kulangot</h5>
          <span><i>Salt</i></span>
          <h3>$67.00</h3>
        </div>
        <button>Add to basket</button>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default ShopPage