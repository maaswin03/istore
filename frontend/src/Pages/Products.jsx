import React from 'react'
import '../Styles/Style.css'
import Navbar from '../Components/Navbar'
import iphone15 from '../Image/iphone15.png'
import iphone14 from '../Image/iphone14.jpeg'
import iphone13 from '../Image/iphone13.jpeg'
import se from '../Image/se.jpeg'
import backcase from '../Image/case.jpeg'
import wallet from '../Image/wallet.jpeg'
import case1 from '../Image/case1.jpeg'
import key from '../Image/key.jpeg'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div>
            <Navbar />

            <div className='Products1'>
                <div className='Products2' style={{ marginBottom: '0px' }}><span style={{ color: 'black' }}>All models.</span><span>Take your pick.</span></div>
                <div className='Products2' style={{ marginTop: '3%', fontSize: '25px' }}><span style={{ color: 'black' }}>iPhone 15 Series</span></div>
                <div className='Products3'>
                    <div className='Products4'>
                        <h3>iPhone 15 Pro Max</h3>
                        <img src={iphone15} />
                        <div className='Products5'>
                            <p>From ₹21483.00/mo. with instant savings and No Cost EMI or ₹134900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='Products4'>
                        <h3>iPhone 15 Pro</h3>
                        <img src={iphone14} />
                        <div className='Products5'>
                            <p>From ₹10983.00/mo. with instant savings and No Cost EMI or ₹69900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='Products4'>
                        <h3>iPhone 15 Plus</h3>
                        <img src={iphone13} />
                        <div className='Products5'>
                            <p>From ₹9483.00/mo. with instant savings and No Cost EMI or ₹59900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='Products4'>
                        <h3>iPhone 15</h3>
                        <img src={se} />
                        <div className='Products5'>
                            <p>From ₹7983.00/mo. with instant savings and No Cost EMI or ₹49900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                </div>

                <div className='Products2' style={{fontSize: '25px' }}><span style={{ color: 'black' }}>iPhone 14 Series</span></div>
                <div className='Products3'>
                    <div className='Products4'>
                        <h3>iPhone 14 Plus</h3>
                        <img src={iphone15} />
                        <div className='Products5'>
                            <p>From ₹21483.00/mo. with instant savings and No Cost EMI or ₹134900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                    <div className='Products4'>
                        <h3>iPhone 14</h3>
                        <img src={iphone14} />
                        <div className='Products5'>
                            <p>From ₹10983.00/mo. with instant savings and No Cost EMI or ₹69900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                </div>

                <div className='Products2' style={{fontSize: '25px' }}><span style={{ color: 'black' }}>iPhone 13 Series</span></div>
                <div className='Products3'>
                    <div className='Products4'>
                        <h3>iPhone 13</h3>
                        <img src={iphone13} />
                        <div className='Products5'>
                            <p>From ₹9483.00/mo. with instant savings and No Cost EMI or ₹59900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
                </div>


                <div className='Products2' style={{fontSize: '25px' }}><span style={{ color: 'black' }}>iPhone SE</span></div>
                <div className='Products3'>
                    <div className='Products4'>
                        <h3>iPhone SE</h3>
                        <img src={se} />
                        <div className='Products5'>
                            <p>From ₹7983.00/mo. with instant savings and No Cost EMI or ₹49900.00</p>
                            <button><Link to="/cart" style={{color:'white',textDecoration:'none'}}>Buy</Link></button>
                        </div>
                    </div>
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

        </div>
    )
}

export default Products