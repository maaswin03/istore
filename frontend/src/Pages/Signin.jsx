import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Style.css'

function Signin() {
    return (
        <div>
            <Navbar />

            <div className='signin1'>
                <div className='signin2'>
                    <h2>Sign in to IStore</h2>
                    <form>
                        <input type="text" placeholder='Email or Phone Number' /><br></br>
                        <input type="password" placeholder='Password' /><br></br>
                        <button type="submit">Signin</button><br></br>
                        <div className='signin3'>
                            <input type='checkbox' name="Remember me" />
                            <p style={{marginTop:'4%',marginLeft:'2%'}}>Remember Me</p>
                        </div>
                    </form>
                    <p id="signin4"><a href=''>Forgetten your password</a></p>
                    <p id="signin4"> Do not have an Apple ID?  <a href=''> create yours now.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signin