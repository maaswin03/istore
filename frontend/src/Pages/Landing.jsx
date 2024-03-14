import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import image from '../Image/images.jpg'
import iphone15 from '../Image/iphone15.png'
import iphone14 from '../Image/iphone14.jpeg'
import iphone13 from '../Image/iphone13.jpeg'
import se from '../Image/se.jpeg'
import intro from '../Image/intro1-1.mp4'
import backcase from '../Image/case.jpeg'
import wallet from '../Image/wallet.jpeg'
import case1 from '../Image/case1.jpeg'
import key from '../Image/key.jpeg'
import load from '../Image/load1.jpeg'
import load1 from '../Image/load2.jpeg'
import load3 from '../Image/load3.jpeg'
import titanium from '../Image/titanium.jpeg'

function Landing() {
    return (
        <div>
            <Navbar />
            <div className='home1'>
                <div className='home2'>
                    <div className='home3'>
                        <h1>Discover Most Suitable Smart Phone</h1>
                        <p>Discover the finest, trustworthy, and affordable mobile phones right here. Our emphasis is on superior product quality. Explore a wide range of mobile phones from various brands. Don't wait any longer – place your order now!</p>
                        <div className='home4'>
                            <i class="fa fa-search" style={{ fontSize: '20px', color: '#3858D6' }}></i>
                            <input type='text' placeholder='Find the best product' />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className='home3'>
                        <img src={image} width='100%' height='100%' />
                    </div>
                </div>
            </div>


            <div className='home7'>
                <div className='home10'><span style={{ color: 'black' }}>All models.</span><span>Take your pick.</span></div>
                <div className='home8'>
                    <div className='home9'>
                        <h3>iPhone 15 & iPhone 15 Pro</h3>
                        <img src={iphone15} />
                        <div className='home11'>
                            <p>From ₹21483.00/mo. with instant savings and No Cost EMI or ₹134900.00</p>
                            <button><Link to="/products" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='home9'>
                        <h3>iPhone 14 & iPhone 14 Plus</h3>
                        <img src={iphone14} />
                        <div className='home11'>
                            <p>From ₹10983.00/mo. with instant savings and No Cost EMI or ₹69900.00</p>
                            <button><Link to="/products" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='home9'>
                        <h3>iPhone 13</h3>
                        <img src={iphone13} style={{ marginTop: '10%' }} />
                        <div className='home11'>
                            <p>From ₹9483.00/mo. with instant savings and No Cost EMI or ₹59900.00</p>
                            <button><Link to="/products" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='home9'>
                        <h3>iPhone SE</h3>
                        <img src={se} style={{ marginTop: '10%' }} />
                        <div className='home11'>
                            <p>From ₹7983.00/mo. with instant savings and No Cost EMI or ₹49900.00</p>
                            <button><Link to="/products" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home12'>
                <div className='home13'>
                    <video width='100%' height='50%' autoPlay loop muted>
                        <source src={intro} type='video/mp4' />
                    </video>
                </div>
            </div>




            <div className='home7'>
                <div className='home10'><span style={{ color: 'black' }}>Accessories.</span><span>Essentials that pair perfectly with your favourite devices.</span></div>
                <div className='home8'>
                    <div className='home9 home15'>
                        <img src={backcase} />
                        <h3>iPhone 15 Silicone Case with MagSafe - Light Blue</h3>
                        <div className='home11'>
                            <p>MRP ₹4900.00 (Incl. of all taxes)</p>
                        </div>
                    </div>
                    <div className='home9 home15'>
                        <img src={wallet} />
                        <h3>iPhone FineWoven Wallet with MagSafe - Pacific Blue</h3>
                        <div className='home11'>
                            <p>MRP ₹5900.00 (Incl. of all taxes)</p>
                        </div>
                    </div>
                    <div className='home9 home15'>
                        <img src={case1} />
                        <h3>iPhone 15 Pro FineWoven Case with MagSafe - Evergreen</h3>
                        <div className='home11'>
                            <p>MRP ₹5900.00 (Incl. of all taxes)</p>
                        </div>
                    </div>
                    <div className='home9 home15'>
                        <img src={key} />
                        <h3>AirTag FineWoven Key Ring - Coral</h3>
                        <div className='home11'>
                            <p>MRP ₹3900.00 (Incl. of all taxes)</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='home40'>
                <div className='home41'>
                    <div className='home45'>
                        <div className='home46'>
                            <h2>iPhone 15 Pro</h2>
                            <h3>Titanium</h3>
                            <span style={{ color: 'white' }}>From ₹21483.00/mo. or ₹134900.00*</span><br></br>
                            <button><Link to="/products" style={{color:'white',textDecoration:'none'}}>Buy</Link></button><br></br>
                            <p><a href="">Learn More &gt;</a></p>
                        </div>
                    </div>
                    <div className='home45'>
                        <img src={titanium} />
                    </div>

                </div>
            </div>

            <div>
                <div className='home20'>
                    <div className='home21'>
                        <div className='home22'>
                            <span>Get ₹17500.00-₹62300.00 in credit when you trade in iPhone 11 or higher.6</span>
                            <p><Link to="/products">See what your device is worth &gt;</Link></p>
                        </div>
                        <img src={load} />
                    </div>
                    <div className='home21'>
                        <div className='home22' style={{ marginTop: '7%' }}>
                            <span>Pay with 3- or 6-month No Cost EMI.</span>
                            <p style={{ fontSize: '14px' }}>Choose the way that’s right for you.</p>
                            <p><Link to="/contactus">Learn more &gt;</Link></p>
                        </div>
                        <img src={load1} />
                    </div>
                </div>
            </div>

            <div className='home23'>
                <div className='home25'>
                    <div className='home22' style={{ marginTop: '7%' }}>
                        <span>Why Apple is the best place to buy iPhone.</span>
                        <p style={{ fontSize: '11px' }}>You can choose a payment option that works for you, pay less with a trade‑in, connect your new iPhone to your carrier and get set up quickly. You can also chat with a Specialist anytime.</p>
                        <p><Link to="/contactus">Learn more &gt;</Link></p>
                    </div>
                </div>
            </div>


            <div className='home30'>

            </div>
        </div>
    )
}

export default Landing