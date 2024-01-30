import { useState } from 'react'
import '../App.css'
function ShoppingCart(){
    return(
        <>
        <div className='shopping-cart'>
            <h4>Shopping Cart</h4>
            <div className='shopping-items'>
                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80'></img>
                </div>
                <div className='details'>
                    <p>New York , USA</p>
                    <p>Centrally-located Manhattan studio</p>
                    <p>$105</p>
                </div>
            </div>
        </div>
        <div className='summary'>
            <h4>Summary</h4>
        </div>
        </>
    )
}
export default ShoppingCart