import React from 'react';
import './spinner-loading.css';
import ReactDOM from 'react-dom';
const modalId = document.getElementById('form-modal');

const LoadingSpinner = () => {
    return ReactDOM.createPortal(
        <div className={`fixed bg-[#000000e1] top-0 overflow-hidden w-full h-screen transition-all duration-[500ms]`}>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]`}><span className="loader">L &nbsp; ading</span></div>
        </div>,modalId
    );
};

export default LoadingSpinner;