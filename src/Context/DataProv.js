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

    // here store all paid biiling information
    const [paidBillsData,setPaidBillsData] = useState(null);

    // logout function
    const logout = () => {
        setUserLoad(false);
        localStorage.removeItem('authData');
    };

    // auto fetch persist user
    useEffect(()=>{
        const userEncodedInfo = localStorage.getItem('authData');
        const source = axios.CancelToken.source();

        userEncodedInfo && axios.get(`https://easy-pay-bills.vercel.app/checkUser`,{headers: {secretKey: userEncodedInfo}})
        .then(res => {
            setLoaded(true);
            if(res.data.acknowledge) return setUserLoad(true);
        })
        .catch(e => {
            setLoaded(true);
            return console.log(e.message);
        });

        return () => source.cancel();
    },[]);

    // fetch all paid bills data
    useEffect(()=>{
        const source = axios.CancelToken.source();
        userLoad ?
            axios.get(`http://localhost:5000/billing-list`)
            .then(res => setPaidBillsData(res.data))
            .catch(e => console.log(e.message))
        : setPaidBillsData(null)
        return () => source.cancel();
    },[userLoad]);

    const providingFunc = {
        toggleModal,
        setToggleModal,
        closeToggle,
        loaded,
        userLoad,
        logout,
        setUserLoad,
        setLoaded,
        paidBillsData,
        setPaidBillsData
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