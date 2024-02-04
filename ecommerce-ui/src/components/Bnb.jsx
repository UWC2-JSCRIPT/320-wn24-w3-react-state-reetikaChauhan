import { useState } from 'react'
import '../App.css'
import BnBs from '../../../_data/bnbs.json'
import BnBGallery from './BnBGallery'
import SearchForm from './SearchForm'
import ShoppingCart from './ShoppingCart'
function BnB() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [selectedRental, setSelectedRental] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (selectedRental) => {
    if (checkInDate && checkOutDate && selectedRental) {
    // Calling the addToCart function passed as a prop with the selected data
      addToCart({ checkInDate, checkOutDate, selectedRental });
    } else {
    // Handle error or show a message to the user
      console.error('Please select valid dates and a rental before adding to the cart.');
    }
  };
  
  const addToCart = (bookingInfo) => {
    // Update the state to include the new booking information in the cart
    setCartItems(prevCartItems => [...prevCartItems, bookingInfo]); 
  }

  const handleDeleteItem = (index) =>{
    console.log('i am working inside delete',index,cartItems.length)
    if(cartItems.length === 1){
      setCartItems([])
    }
    else if(index > 0){
    const arr1 = cartItems.slice(0,index)
    const arr2 = cartItems.slice(index+1)
    console.log(arr1,arr2)
    setCartItems([...arr1,...arr2])
    }
    else{
    const arr2 = cartItems.slice(index + 1)
    console.log('in else',arr2)
    setCartItems([...arr2])
    }
  }
  
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
        <div className='head'>
            <div className='navbar'>
                <div className='bnb'>
                    <a href='#' className='bnb'><h4>BnB</h4></a>
                </div>
                <div className='center-links'>
                    <a href='#' className='stays'><h6>Stays</h6></a>
                    <a href='#'className='experiences'><h6>Experineces</h6></a>
                    <a href='#'className='onlineexperiences'><h6>Online Experiences</h6></a>
                </div>
                <div className='logins'>
                    <a href='#'className='byh'><h6>BnB your home</h6></a>
                    <a href='#'><span className="material-symbols-outlined">language</span></a>
                </div>
            </div> 
            <div className='heading'>
                <h4>Learn About Guest Favourites, most loved homes of BnB</h4>
            </div>  
        </div>
      <div className='rental-shoppingcart'>
        <div className='rental'>
          <div className='searchField'>
              <SearchForm setCheckInDate = {setCheckInDate} setCheckOutDate= {setCheckOutDate} />
          </div>
          <section className="image-gallery">
            <BnBGallery bnbs = {BnBs} setSelectedRental = {setSelectedRental} handleAddToCart = {handleAddToCart}/>
          </section>
        </div>
        <div className='shopping-cart'>
           <h4>Shopping Cart</h4>
          <ShoppingCart cartItems = {cartItems} handleDeleteItem = {handleDeleteItem}/>
        </div>
      </div>
      <div className='footer-section'>
        <div className='row-1'>
          <ul>
            <li><h6>Support</h6></li>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
          </ul>
        </div>
        <div className='row-2'>
          <ul>
            <h6>Hosting</h6>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>
        <div className='row-2'>
          <ul>
            <h6>Airbnb</h6>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BnB
