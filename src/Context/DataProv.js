import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const DataProv = ({children}) => {

    // form Modal toggle state
    const modalInitVal = {
        stateBool: false,
        action: null,
    };
    const [toggleModal,setToggleModal] = useState(modalInitVal);
    const closeToggle = {...toggleModal,stateBool: false,action: ''};

    // get existUser
    const[userLoad,setUserLoad] = useState(null);
    const[loaded,setLoaded] = useState(false);

    // logout function
    const logout = () => {
        setUserLoad(false);
        localStorage.removeItem('authData');
    }

    useEffect(()=>{
        const userEncodedInfo = localStorage.getItem('authData');
        const source = axios.CancelToken.source();

        userEncodedInfo && axios.get(`https://online-payment-bills-server.vercel.app/checkUser`,{headers: {secretKey: userEncodedInfo}})
        .then(res => {
            setLoaded(true);
            if(res.data.acknowledge) return setUserLoad(true);
        })
        .catch(e => {
            setLoaded(undefined);
            return console.log(e.message);
        });

        return () => source.cancel();
    },[]);

    const providingFunc = {
        toggleModal,
        setToggleModal,
        closeToggle,
        loaded,
        userLoad,
        logout
    };

    return(
        <DataContext.Provider value={providingFunc}>
            {
                children
            }
        </DataContext.Provider>
    );
};

export default DataProv;