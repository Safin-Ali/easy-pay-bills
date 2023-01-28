import React from 'react';

const PrimaryButton = ({clasName,padding,onClick,children,center}) => {
    return (
        <div className={center && 'text-center'}>
            <button onClick={onClick} className={`text-white ${clasName} ${padding ? padding : 'px-5 py-2.5'} bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>{children}</button>
        </div>
    );
};

export default PrimaryButton;