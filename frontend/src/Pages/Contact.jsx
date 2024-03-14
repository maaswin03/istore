import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/Style1.css'
import image from '../Image/allproducts.png'
import image1 from '../Image/family.jpg'
import image2 from '../Image/applesupport.png'
import image3 from '../Image/family1.png'
import contactus from '../Image/contactus.png'

function Contact() {
    return (
        <div>
            <Navbar />

            <div className='contact1'>
                <h3>Get Support</h3>
            </div>

            <div className='contact7'>
                <div className='contact6'>
                    <img src={image1} width='100%' height='100%'/>
                </div>
            </div>

            <div className='contact4' style={{marginBottom:'3%'}}>
                <div className='contact5'>
                    <h3>Apple Support on YouTube</h3>
                    <p>Check out our official YouTube channel to help you get the most from your Apple devices and services.</p>
                    <p><a href="https://www.youtube.com/applesupport" target='_blank'>Visit Apple Suppor on YouTube &gt;</a></p>
                    <img src={image2} width='100%' height='100%' style={{borderRadius:'15%'}}/>
                </div>
            </div>

            <div className='contact4' style={{marginBottom:'3%'}}>
                <div className='contact5'>
                    <h3>Join free sessions at your Apple Store</h3>
                    <p>Find out about the latest features and how to go further with your Apple devices.</p>
                    <p><a href="">Sign in &gt;</a></p>
                    <img src={image3} width='100%' height='100%'/>
                </div>
            </div>



            <div className='contact2'>
                <div className='contact3 contact10 contact11'>
                    <h3>Get Support</h3>
                    <p style={{marginTop:'0'}}>Give us a few details and we’ll offer the best solution. Connect by phone, chat, email and more.</p>
                    <button>Start now</button>
                    <img src={contactus} width='100%' style={{marginBottom:'0'}}/>
                </div>
                <div className='contact3 contact11'>
                    <h3>Get the help you need.</h3>
                    <p>Get help for all of your Apple products in one place, or connect with an expert.</p>
                    <p><a href="" style={{textDecoration:'none'}}>Download &gt;</a></p>
                    <img src={image} width='100%'/>
                </div>
            </div>

            <div className='contact4'>
                <div className='contact5'>
                    <h3>My Support</h3>
                    <p>Get up-to-date information about your Apple products including cover, repairs and much more.</p>
                    <p><a href="">Sign in to My Support &gt;</a></p>
                </div>
            </div>


            <div className='contact4'>
                <div className='contact5'>
                    <h3>AppleCare+</h3>
                    <p>Get unlimited repairs for accidental damage protection, priority access to Apple experts, and more.</p>
                    <p><a href="">Learn More &gt;</a></p>
                    <img src={image} width='100%'/>
                </div>
            </div>


            <div className='contact4'>
                <div className='contact5' style={{textAlign:'left'}}>
                    <h3>Beware of counterfeit parts</h3>
                    <p>Some counterfeit and third-party power adapters and batteries may not be designed properly and could result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we recommend visiting an <a herf="" style={{color:'blue'}}>Apple Authorised Service Provider.</a> If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power adapter.</p>
                    <p>Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly. Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact