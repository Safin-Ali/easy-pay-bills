import React from 'react';

const PrimaryButton = ({className,padding,onClick,children,center}) => {
    return (
        <div className={center && 'text-center'}>
            <button onClick={onClick} className={`text-white ${className} ${padding ? padding : 'px-5 py-2.5'} bg-[#04AA6D] hover:bg-emerald-600 transition-colors rounded-full focus:ring-2 ring-offset-1 ring-[#04AA6D]`}>{children}</button>
        </div>
    );
};

export default PrimaryButton;