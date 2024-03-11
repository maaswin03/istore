import React from 'react'
import '../Styles/Style.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='nav1'>
                <div className='nav2'>
                    <div className='nav3 nav5'>
                        <i class="fa fa-apple" style={{ fontSize: '25px', color: 'white' }}></i>
                        <p style={{color:'white'}}>IStore</p>
                    </div>
                    <div className='nav3 nav6'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>Recent product</Link></li>
                            <li><a href=''>Contact</a></li>
                            <li><a href=''>About</a></li>
                        </ul>
                    </div>
                    <div className='nav3 nav4'>
                        <i class="fa fa-search" style={{ fontSize: '25px', color: 'white' }}></i>
                        <i class="fa fa-user" style={{ fontSize: '25px', color: 'white' }}></i>
                        <i class="fa fa-shopping-cart" style={{ fontSize: '25px', color: 'white' }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar