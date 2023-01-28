import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProv = ({children}) => {

    // form Modal toggle state
    const modalInitVal = {
        stateBool: false,
        action: null,
    };
    const [toggleModal,setToggleModal] = useState(modalInitVal);
    const closeToggle = {...toggleModal,stateBool: false,action: ''};

    const providingFunc = {
        toggleModal,
        setToggleModal,
        closeToggle
    }
    return(
        <DataContext.Provider value={providingFunc}>
            {
                children
            }
        </DataContext.Provider>
    )
};

export default DataProv;