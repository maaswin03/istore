import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import '../Styles/Style2.css'

function Signup() {
  const [firstname,setfirstname] = useState('')
  const [lastname,setlastname] = useState('')
  const [country , setCountry] = useState('')
  const [dob,setdob] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')
  const [phone , setphone] = useState('') 

  const handleSignup = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch('http://127.0.0.1:3000/signup', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({firstname,lastname,email,phone,country,dob,password})
      })

      if(response == 'true'){
        navigate("/login")
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className='signup1'>
        <div className='signup2'>
          <div className='signup3'>
            <h2>Apple ID</h2>
          </div>
          <div className='signup3 signup4'>
            <p><a href=''>Sign in</a></p>
            <p><a href=''>Create Your Apple ID</a></p>
            <p><a href=''>FAQ</a></p>
          </div>
        </div>
      </div>


      <div className='signup5'>
        <form onSubmit={handleSignup}>
          <div className='signup6'>
            <div className='signup7'>

              <h1 style={{ textAlign: 'center' , fontWeight:'500'}}>Create Your Apple ID</h1>
              <p style={{ textAlign: 'center' }}>One Apple ID is all you need to access all Apple services.</p>

              <div className='signup8'>
                <input type="text" placeholder='first name' value={firstname} onChange={(e) => setfirstname(e.target.value)}required />
                <input type="text" placeholder='last name' required style={{ marginLeft: '3%' }} value={lastname} onChange={(e) => setlastname(e.target.value)}/>
              </div>
              <div className='signup9'>
                <p style={{ textAlign: 'left', marginBottom: '0' , fontWeight:'500'}}>COUNTRY/REGION</p>
                <input type="text" placeholder='Country' required value={country} onChange={(e) => setCountry(e.target.value)}/><br></br>
                <input type="date" placeholder='Date Of Birth' required value={dob} onChange={(e) => setdob(e.target.value)}/>
              </div>
            </div>
          </div>
          
          <div className='signup14'>
          <div className='signup6 signup10' style={{border:'none'}}>
            <div className='signup7 signup11'>
              <input type="email" placeholder='name@example.com' required value={email} onChange={(e) => setemail(e.target.value)}/><br></br>
              <p style={{fontSize:'12px'}}>This will be your new Apple ID.</p>
              <input type="password" placeholder='password' required value={password} onChange={(e) => setpassword(e.target.value)}/><br></br>
              <input type="password" placeholder='confirm password' required /><br></br>
              <input type="text" placeholder='phone number' required value={phone} onChange={(e) => setphone(e.target.value)}/>
            </div>
          </div>
          </div>

          <div className='signup12'>
            <div className='signup13'>
              <p>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. <a href='' style={{textDecoration:'none',color:'blue'}}>See how your data is managed.</a></p>
              <button type='submit'>Continue</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Signup