import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataProv';
import PrimaryButton from '../Button/PrimaryButton';

const Appbar = () => {
    const {logout,userLoad,paidBillsData} = useContext(DataContext);
    return (
        <header>
            <nav className={`flex md:px-[5%] py-[2%] gap-3 lg:py-[1%] shadow justify-between items-center`}>
                <div className={`flex gap-2 items-center`}>
                    {/* Brand Name */}
                    <div className={`px-[2.5%] md:px-0`}>
                        <h2 className={`text-lg md:text-3xl dark:text-whitePrimary font-bold font-mincho`}>OPB</h2>
                    </div>
                </div>
                <div className={`flex items-center gap-5`}>
                    <h5 className={`text-xl font-medium`}>Total paid {paidBillsData?.totalPay || 0}$</h5>
                    {
                        userLoad && <div><PrimaryButton onClick={logout} clasName={`bg-red-500 hover:bg-red-600`} padding={`px-2 py-1`}>Logout</PrimaryButton></div>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Appbar;