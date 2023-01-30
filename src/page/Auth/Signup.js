import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {IoMdEye,IoMdEyeOff} from 'react-icons/io';
import handleDynaForm from '../../Hooks/handleDynaForm';
import axios from 'axios';
import { DataContext } from '../../Context/DataProv';
import { ToastContainer } from 'react-toastify';

const Signup = () => {

    const {notifyErr} = useContext(DataContext);

    // togglr pass feild
    const [passToggle,setPassToggle] = useState(false);

    // navigator
    const navigate = useNavigate();

    if(localStorage.getItem('authData')) return <Navigate to={`/`}></Navigate>;

    // post form value;
    const handleSignup = (obj,clearForm) => {
        axios.post(`https://easy-pay-bills.vercel.app/registration`,obj)
        .then(res => {
            if(res.data.acknowledged) {
                alert('Registration Successful');
                clearForm()
                return navigate('/login');
            };
        })
        .catch(e => {
            notifyErr(e.response.data.message);
        })

    };

    return (
        <div className={`w-[30%] mx-auto flex items-center justify-center h-[calc(100vh-40px)]`}>
            <form onSubmit={handleDynaForm(handleSignup)} className={`shadow border p-5 w-full`}>
                <h4 className={`text-xl text-center font-bold underline`}>Registration</h4>

                <div className={`my-5`}>
                    <p className={`font-medium ml-1 mb-2`}>Full Name</p>
                    <input type="text" name={'userFullName'} placeholder={"enter email"} className={`border p-2 w-full rounded`} />
                </div>

                <div className={`my-5`}>
                    <p className={`font-medium ml-1 mb-2`}>Email</p>
                    <input type="email" name={'userEmail'} placeholder={"enter email"} className={`border p-2 w-full rounded`} />
                </div>

                <div className={`my-5`}>
                    <p className={`font-medium ml-1 mb-2`}>Confirm Password</p>
                    <div className={`relative`}>
                        <input type={passToggle ? 'text' : 'password'} name={'userPass'} placeholder={"enter password"} className={`border p-2 w-full rounded`} />
                        {
                            passToggle ? <IoMdEyeOff onClick={()=> setPassToggle(!passToggle)} className={`absolute top-1/2 right-[5%] cursor-pointer transform -translate-y-1/2`}></IoMdEyeOff> :
                            <IoMdEye onClick={()=> setPassToggle(!passToggle)} className={`absolute top-1/2 right-[5%] cursor-pointer transform -translate-y-1/2`}></IoMdEye>
                        }
                    </div>
                </div>

                <div className={`my-5`}>
                    <p className={`font-medium ml-1 mb-2`}>Password</p>
                        <input type={passToggle ? 'text' : 'password'} name={'confirmPass'} placeholder={"confirm password"} className={`border p-2 w-full rounded`} />
                </div>

                <div className={`flex justify-between items-center`}>
                    <div><button className={`bg-blue-600 py-1 px-2 rounded-md text-white hover:bg-blue-700 duration-200`}>SIGNUP</button></div>
                    <Link className={'text-blue-600'} to={'/login'}>signin your account</Link>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;