import { useState } from 'react'
import './App.css'
import HeadForm from './components/Header'
import BnBs from '../../_data/bnbs.json'
import BnBGallery from './components/BnBGallery'
import SearchForm from './components/SearchForm'
import ShoppingCart from './components/ShoppingCart'
function App() {
  

  return (
    <>
      <div className='top-head'>
        <a href='#'>Find a Rental</a>
        <p>|</p>
        <a href='#'>Help</a>
        <p>|</p>
        <a href='#'>Join us</a>
        <p>|</p>
        <a href='#'>Sign In</a>
      </div>
      <HeadForm/>
      <div className='rental-shoppingcart'>
        <div className='rental'>
          <div className='searchField'>
              <SearchForm/>
          </div>
          <section className="image-gallery">
            <BnBGallery bnbs = {BnBs}/>
          </section>
        </div>
        <div className='shopping-cart'>
          <ShoppingCart/>
        </div>
       
      </div>
    </>
  )
}

export default App
