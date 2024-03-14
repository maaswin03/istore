import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Style1.css'
import image from '../Image/iphone14.jpeg'

function Cart() {
  return (
    <div>
        <Navbar/>

        <div className='cart1'>
            <div className='cart2'>
                <h1>Your bag total is ₹69900.00 or ₹10983.00/mo.per</h1>
                <button>CheckOut</button>
            </div>
        </div>

        <div className='cart3'>
            <div className='cart4'>
                <div className='cart5'>
                    <img src={image} width='70%'/>
                </div >
                <div className='cart5'>
                    <h2>iPhone 14 Plus</h2>
                </div>
                <div className='cart5'>
                    <p>₹69900.00</p>
                    <p><a href="">Remove</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart