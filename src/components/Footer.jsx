import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';



function Footer() {
  return (
    <div className='options m-0 '>
      <p style={{ backgroundColor: 'rgb(62, 75, 89)', color: 'white', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 'none' }} >Back to Top</p>

      <div className='row w-100 ps-3 '>
        <div className="col-md-2"></div>
        <div className="col-md-2 pt-0">
          <h6 style={{ fontWeight: '700', paddingBottom: '10px', marginTop: '10px' }}>Get To Know Us</h6>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div className="col-md-2">
          <h6 style={{ fontWeight: '700', paddingBottom: '10px', marginTop: '10px' }}>Make Money With Us</h6>
          <p>Sell Products On Amazon </p>
          <p>Sell On Amazon Business</p>
          <p>Sell Apps On A mazon</p>
          <p>Became an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish With Us</p>
          <p>Host an Amazon Hub</p>
        </div>
        <div className="col-md-2">
          <h6 style={{ fontWeight: '700', paddingBottom: '10px', marginTop: '10px' }}>Amazon Payment Products</h6>
          <p>Amazo Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div className="col-md-2">
          <h6 style={{ fontWeight: '700', paddingBottom: '10px', marginTop: '10px' }}>Let Us Help You</h6>
          <p>Amazon and COVID 19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Mangae Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
        <div className="col-md-2"></div>
        <hr />
        <div className='row d-flex justify-content-center align-items-center mb-3 '>
          <div className="col-md-4"></div>

          <div className="col-md-1 ">
            <img className='footer_img' src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" alt="" />
          </div>
          <div className="col-md-1 ">
            <button className='btn text-light' style={{ color: 'transparent', border: '1px solid white ' }}>
              <Dropdown className='text-light' >
                <Dropdown.Toggle className='dropdown' variant="Secondary" style={{ color: 'white', fontSize: '12px' }}><FontAwesomeIcon icon={faGlobe} /> English</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </button>
          </div>
          <div className="col-md-1">
            <button className='btn text-light ' style={{ color: 'transparent', border: '1px solid white ', fontSize: '10px', width: '100px', height: '45px' }}>$ USD-U.S.Dollar

            </button>
          </div>
          <div className="col-md-1 ">
            <button className='btn text-light' style={{ color: 'transparent', border: '1px solid white ', fontSize: '10px', width: '100px', height: '45px', padding: '0px' }}> <img style={{ height: '10px', paddingRight: '5px', paddingLeft: '5px' }} src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
              United States

            </button>
          </div>
          <div className="col-md-4"></div>

        </div>


      </div>
      <div style={{ backgroundColor: 'rgb(11, 17, 22)' }} className='row d-flex justify-content-center align-items-center ps-2  '>
       <div className="col-md-2"></div>
       <div className="col-md-1 pt-5">
        <p style={{fontWeight:'600'}}>Amazon Music <span style={{fontSize:'13px',fontWeight:'200'}}>Stream millions of songs</span></p>
        <p style={{fontWeight:'600'}}>AmazonGlobal <span style={{fontSize:'13px',fontWeight:'200'}}>Ship Orders Internationally</span></p>
        <p style={{fontWeight:'600'}}>IMDbPro  <span style={{fontSize:'13px',fontWeight:'200'}}>Get Info Entertainment Professionals Need</span></p></div>
       
       <div className="col-md-1 pt-5">
       <p style={{fontWeight:'600'}}>Amazon Ads <span style={{fontSize:'13px',fontWeight:'200'}}>Reach customers wherever they spend their time</span></p>
       <p style={{fontWeight:'600'}}>Home Services <span style={{fontSize:'13px',fontWeight:'200'}}>Experienced Pros Happiness Guarantee</span></p>
       <p style={{fontWeight:'600'}}>Kindle Direct Publishing <span style={{fontSize:'13px',fontWeight:'200'}}>Indie Digital & Print </span></p>
       </div>
       
       <div className="col-md-1 pt-4">
       <p style={{fontWeight:'600'}}>6pm<span style={{fontSize:'13px',fontWeight:'200'}}>Score deals on fashion brands</span></p>
       <p style={{fontWeight:'600'}}>Amazon Web Services <span style={{fontSize:'13px',fontWeight:'200'}}>Scalable Cloud Computing Services</span></p>
       <p style={{fontWeight:'600'}}>Prime Video Direct <span style={{fontSize:'13px',fontWeight:'200'}}>Video Distribution Made Easy</span></p>
       </div>
       
       <div className="col-md-1 pt-4">
       <p style={{fontWeight:'600'}}>AbeBooks <span style={{fontSize:'13px',fontWeight:'200'}}>Books, art & collectibles</span></p>
       <p style={{fontWeight:'600'}}>Audible <span style={{fontSize:'13px',fontWeight:'200'}}>Listen to Books & Original Audio Performances</span></p>
       <p style={{fontWeight:'600'}}>Shopbop <span style={{fontSize:'13px',fontWeight:'200'}}>Designer Fashion Brands</span></p>
       </div>
       <div className="col-md-1 pt-0 ">
       <p style={{fontWeight:'600'}}>ACX <span style={{fontSize:'13px',fontWeight:'200'}}>Audiobook Publishing Made Easy</span></p>
       <p style={{fontWeight:'600'}}>Box Office Mojo <span style={{fontSize:'13px',fontWeight:'200'}}>Find Movie Box Office Data</span></p>
       <p style={{fontWeight:'600'}}>Woot! <p style={{fontSize:'13px',fontWeight:'200'}}>Deals and Shenanigans</p></p>
       </div>
       <div className="col-md-1 ">
       <p style={{fontWeight:'600'}}>Sell on Amazon <span style={{fontSize:'13px',fontWeight:'200'}}>Start a Selling Account</span></p>
       <p style={{fontWeight:'600'}}>Goodreads <span style={{fontSize:'13px',fontWeight:'200'}}>Book reviews & recommendations</span></p>
       <p style={{fontWeight:'600'}}>Zappos <p style={{fontSize:'13px',fontWeight:'200'}}>Shoes and Clothing</p></p>
       </div>
       <div className="col-md-1 pt-1 ">
       <p style={{fontWeight:'600'}}>Amazon Business <span style={{fontSize:'13px',fontWeight:'200'}}>Everything For Your Business</span></p>
       <p style={{fontWeight:'600'}}>IMDb <span style={{fontSize:'13px',fontWeight:'200'}}>	Movies, TV & Celebrities</span></p>
       <p style={{fontWeight:'600'}}>Ring <span style={{fontSize:'13px',fontWeight:'200'}}>Smart Home Security Systems</span></p>
       </div>
       <div className="col-md-2 pt-5">
       
       </div>

       <div className='d-flex justify-content-center align-items-center pt-3 fs-5 ' >
        <p>Conditions of Use <span style={{paddingLeft:'10px'}}>Privacy Notice</span> <span style={{paddingLeft:'10px'}}>Your Ads Privacy Choices</span></p>
        
      </div >
      <p className='d-flex justify-content-center align-items-center'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
      
    </div>

  )
}

export default Footer