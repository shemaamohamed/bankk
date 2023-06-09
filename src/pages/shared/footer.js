import React from 'react';
import"../../style/footer.css"
import { FaFacebookF ,FaInstagram ,FaWhatsapp, FaYoutube} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='content'>
            <div className='contentf'>
                <div className='details'>
                    <h3>Easy-Bank</h3>
                    <h6>This online banking platform provides customers with convenient and secure banking services tailored to meet their needs.</h6>
                    <div className='media'>
                    <h4>Let's Socialize</h4>
                    <FaFacebookF className='facebook'   style={{color:'blue' ,fontSize: '25px'}}></FaFacebookF>
                    <FaInstagram className='instagram'   style={{color:'#544e74', fontSize: '25px'}}></FaInstagram>
                    <FaWhatsapp className='whatsapp'   style={{color:'darkgreen', fontSize: '25px'}}></FaWhatsapp>
                    <FaYoutube className='youtube'   style={{ color:'red',fontSize: '25px'}}></FaYoutube>
                    </div>
             

                </div>
                <div className='details'>
                <h3>QuickLinks</h3>
                    <li>Securites</li>
                    <li>Investment</li>
                    <li>Prizes</li>
                  
                    
                </div>
                <div className='details'>
                <h3>Others</h3>
                    <li>Sitemaps</li>
                    <li>Tenders</li>
                  
                    
                </div>
                <div className='details'>
                <h3>Shortcuts</h3>
                    <li>SMEs</li>
                    <li>Prizes</li>
                    <li>Fees</li>
                  
                    
                </div>
                <div className='details'>
                    <h3>CallUs</h3>
                    <h6>Locally: 199823 - Internationally: 0020219973</h6>
                </div>
            </div>
            <h4>Head Office Bank Tower,1187 Corniche El Nile St., Moharmbek, Alexandria, Egypt</h4>
            <h6>All rights reserved - Easy-Bank Of Egypt © 2023 - V1.0</h6>
            
        </div>
    );
};

export default Footer;