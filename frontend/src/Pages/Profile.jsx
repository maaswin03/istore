import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Style1.css'
import symbol from '../Image/symbol.jpeg'
import macbook from '../Image/macbook.png'

function Profile() {
  return (
    <div>
      <Navbar />


      <div>
        <div className='profile1'>
          <div className='profile2'>
            <h3>Account</h3>
          </div>
          <div className='profile2 profile3'>
            <p><a href="">Sign out &gt;</a></p>
          </div>
        </div>
        <div className='profile4'>
          <h2>HI,ASWIN.</h2>
        </div>
      </div>


      <div className='profile11'>
        <div className='profile12'>
          <h2 style={{ marginBottom: '0' ,fontWeight:'500' }}>Your Devices</h2>
          <p style={{ marginTop: '0' }}>You're signed in to 1 device with m.a.aswin2005@gmail.com.</p>
        </div>
        <div className='profile12'>
          <div className='profile13'>
            <img src={macbook} width='80%' />
          </div>
          <h2 style={{marginBottom:'0' , fontWeight:'500'}}>ASWIN’s MacBook Air</h2>
          <p style={{ marginTop: '0',marginBottom:'0'}}>MacBook Air 13″</p>
          <p style={{ marginTop: '0'}}><a href='' style={{textDecoration:'none',color:'blue'}}>Get Support &gt;</a></p>
        </div>
        <div className='profile12'>
          <p>Don't see your device here? To link a device or make changes, view your <a href="" style={{textDecoration:'none',color:'blue'}}>Apple ID Settings</a></p>
        </div>
      </div>


      <div className='profile15'>
        <div className='profile16'>
          <h3 style={{fontWeight:'500',fontSize:'30px'}}>Your Orders</h3>
          <p>Track, modify, or cancel an order or make a return.</p>
          <p><a href="" style={{textDecoration:'none',color:'blue'}}>See your order history &gt;</a></p>
        </div>
        <div className='profile16'>
          <h3 style={{fontWeight:'500',fontSize:'30px'}}>Your Saves</h3>
          <p>Whether you’re shopping online or in the Apple Store, you can easily save products you’re interested in and follow up on your progress here.</p>
          <p><a href="" style={{textDecoration:'none',color:'blue'}}>See your saves &gt;</a></p>
        </div>
      </div>


      <div className='profile10'>
        <div className='profile5'>
          <div className='profile6'>
            <h2 style={{fontWeight:'500',fontSize:'30px'}}>Account Settings</h2>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>Shipping</h2>
            </div>
            <div className='profile8'>
              <h3>Shipping address</h3>
              <p>ASWIN M A
                13/7A
                MARUTHI NAGAR
                SULUR,
                TN
                641402
                India</p>
              <p><a href="" style={{textDecoration:'none',color:'blue'}}>Edit &gt;</a></p>
            </div>
            <div className='profile8'>
              <h3>Contact information</h3>
              <p>m.a.aswin2005@gmail.com</p>
              <p><a href="" style={{textDecoration:'none',color:'blue'}}>Edit &gt;</a></p>
            </div>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>Privacy</h2>
            </div>
            <div className='profile8 profile9'>
              <h3>Personal information</h3>
              <p>You're in control of your personal information and can manage your data or delete your account at any time. Apple is committed to protecting your privacy.</p>
              <p><a href="" style={{textDecoration:'none',color:'blue'}}>Manage my personal information &gt;</a></p>
            </div>
          </div>
          <div className='profile6'>
            <div className='profile8'>
              <h2>Apple ID</h2>
            </div>
            <div className='profile8 profile9'>
              <p>m.a.aswin2005@gmail.com</p>
              <p><a href="" style={{textDecoration:'none',color:'blue'}}>Manage Apple ID &gt;</a></p>
              <p>Your Apple ID is the account you use to access Apple services like the App Store, Apple Music, iCloud, iMessage, FaceTime, and more.</p>
              <img src={symbol} width='50%' style={{marginTop:'5%'}}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Profile