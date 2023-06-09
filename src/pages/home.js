import React from 'react';
import banksystem from "../images.jpg";
import "../style/home.css"
import { FaMoneyBill, FaLandmark, FaCreditCard, FaWallet } from 'react-icons/fa';



const Home = () => {
    return (
        <>
            <h1>Easy-Bank  </h1>


            {/* <div className='content' >


                <p>This online banking platform provides customers with convenient and secure banking services tailored to meet their needs.

                </p>
            </div> */}
            <div className='choice'>
              
                <div className='money'>
                    <FaLandmark style={{ color: ' #309164', fontSize: '40px' }}></FaLandmark>
                    <h5>This online banking platform provides customers with convenient and secure banking services tailored to meet their needs.
                        </h5>

                </div>
                <div className='money'>
                    <FaCreditCard style={{ color: ' #309164', fontSize: '40px' }}></FaCreditCard>
                    <h5>   Cards offer a variety of features that will transform your banking habits
                        </h5>

                </div>
                <div className='money'>
                    <FaWallet style={{ color: ' #309164', fontSize: '40px' }}></FaWallet>
                    <h5>Send/Receive money to/from any registered wallet 
                        </h5>

                </div>



            </div>

        </>
    );
};

export default Home;