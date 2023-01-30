import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataProv';
import PrimaryButton from '../Button/PrimaryButton';

const Appbar = () => {
    const {logout,userLoad,totalAmount} = useContext(DataContext);
    return (
        <header>
            <nav className={`flex px-2 md:px-[5%] py-[2%] gap-3 lg:py-[1%] shadow justify-between items-center`}>
                <div className={`flex gap-2 items-center`}>
                    {/* Brand Name */}
                    <div className={`px-[2.5%] md:px-0`}>
                        <h2 className={`text-lg sm:text-3xl whitespace-nowrap dark:text-whitePrimary font-bold font-mincho`}><span className={`text-[#04AA6D]`}>Easy</span> <span className={`text-indigo-500`}>Pay</span></h2>
                    </div>
                </div>
                <div className={`flex items-center gap-5`}>
                    <h5 className={`text-lg sm:text-xl font-medium`}>Total paid {totalAmount || 0}$</h5>
                    {
                        userLoad && <div><PrimaryButton onClick={logout} clasName={`text-sm sm:text-base bg-red-500 hover:bg-red-600`} padding={`px-2 py-1`}>Logout</PrimaryButton></div>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Appbar;