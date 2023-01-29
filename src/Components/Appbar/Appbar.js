import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Appbar = () => {
    return (
        <header>
            <nav className={`flex md:px-[5%] py-[2%] gap-3 lg:py-[1%] shadow justify-between items-center`}>
                <div className={`flex gap-2 items-center`}>
                    {/* Brand Name */}
                    <div className={`px-[2.5%] md:px-0`}>
                        <h2 className={`text-lg md:text-3xl dark:text-whitePrimary font-bold font-mincho`}>OPB</h2>
                    </div>
                </div>
                <div>
                    <h5>Total paid</h5>
                </div>
            </nav>
        </header>
    );
};

export default Appbar;