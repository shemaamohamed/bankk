import React from 'react';
import "../style/viewcustomer.css"
import {FaWindowClose} from 'react-icons/fa';

const Viewcustomer = () => {
    const view=()=>{
        document.getElementById("allform").style.display="block";

    }
    const close=()=>{
        document.getElementById("allform").style.display="none";

    }
    return (
        <div>
            <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Gender</th>
                        <th>Balance</th>
                    </tr>
                <tbody className='bodyt'>
                    <tr>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                       <button  href='#' onClick={view}>View</button>
                    </tr>
                    <tr>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                       <button  href='#'>View</button>
                    </tr>
                    <tr>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                       <button  href='#'>View</button>
                    </tr>
                    <tr>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                       <button  href='#'>View</button>
                    </tr>
                    <tr>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                        <td>2357789</td>
                       <button  href='#'>View</button>
                    </tr>
               
                </tbody>
            </table>
            <div id='allform'>
            <FaWindowClose id='close'b onClick={close}   ></FaWindowClose>

                <h1>Transfer</h1>


                <div className='form'>
                <label> From</label>
                <input type='number' placeholder='Id'></input>
                <label> To</label>

                <input type='number' placeholder='To Id'></input>
                <label> Balance</label>

                <input type='number' placeholder='Balance'></input>
                <button  href='#'>Transfer</button>

                </div>
              
            </div>
        </div>
    );
};

export default Viewcustomer;