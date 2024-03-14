import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import '../Styles/Style.css'

function Signin({ onLogin }) {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.text();



            if (data == 'true') {
                onLogin()
                console.log("Login Success")
                navigate("/");
            } else {
                console.log("Login Failed")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar />

            <div className='signin1'>
                <div className='signin2'>
                    <h2>Sign in to IStore</h2>
                    <form onSubmit={handlelogin}>
                        <input type="text" placeholder='Email or Phone Number' value={email} onChange={(e) => setemail(e.target.value)} /><br></br>
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} /><br></br>
                        <button type="submit">Signin</button><br></br>
                        <div className='signin3'>
                            <input type='checkbox' name="Remember me" />
                            <p style={{ marginTop: '4%', marginLeft: '2%' }}>Remember Me</p>
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