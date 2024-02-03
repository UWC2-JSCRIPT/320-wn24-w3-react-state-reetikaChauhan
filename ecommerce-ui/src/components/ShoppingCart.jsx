import { useState } from 'react'
import '../App.css'
function ShoppingCart({cartItems,handleDeleteItem}){
    let totalcostofRentals = 0
    return(
        <>
        {
           cartItems.map((cartItem,index) =>{
            const checkindate = new Date(cartItem.checkInDate)
            const checkoutdate = new Date(cartItem.checkOutDate)
            const timediff = checkoutdate.getTime() - checkindate.getTime()
            const daysDifference = Math.floor(timediff / (24 * 60 * 60 * 1000));
            const totalbeforetaxes = (cartItem.selectedRental.payment.cost) * daysDifference
            const tax = (cartItem.selectedRental.payment.cost * 10)/100
            const totalaftertaxes = totalbeforetaxes + tax
            totalcostofRentals = totalcostofRentals + totalaftertaxes + 200 + 169
            
            return(
                <div className='shopping-item' key={`shopping-cart-${index}`}>
                    <div className='book-image'>
                        <img src={cartItem.selectedRental.image}></img>
                    </div>
                    <div className='details'>
                        <span>
                            <input type="text" value={`Check-In ${cartItem.checkInDate}`} readOnly/>
                            <input type="text" value={`Check-Out ${cartItem.checkOutDate}`} readOnly/>
                        </span>
                        <h5>{cartItem.selectedRental.title}</h5>
                        <p>{cartItem.selectedRental.location.city},{cartItem.selectedRental.location.country}</p>
                        <div className='booking'>
                            <p><span>${cartItem.selectedRental.payment.cost} &times; {daysDifference} nights </span></p>
                            <p>Total before taxes:    ${totalbeforetaxes}</p>
                            <p>Cleaning Fee:    $200</p>
                            <p>BnB Service Fee: $169 <span className="delete-item material-symbols-outlined" onClick={() => handleDeleteItem(index)}>delete</span></p>
                        </div>
                    </div>   
               </div>
            )  
           })
        }
        
        <div className='summary'>
            <h4>Summary</h4>
            <div className='summary_heading'>
                <p>Total of rentals after taxes :     ${totalcostofRentals}</p>
            </div>
        </div>
        </>
    )
}
export default ShoppingCart