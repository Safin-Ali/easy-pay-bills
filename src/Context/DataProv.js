import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const DataContext = createContext();

const DataProv = ({children}) => {

    // form Modal toggle state
    const modalInitVal = {
        stateBool: false,
        action: null,
    };
    const [toggleModal,setToggleModal] = useState(modalInitVal);
    const closeToggle = {...toggleModal,stateBool: false,action: '',payload: ''};

    // get existUser
    const[userLoad,setUserLoad] = useState(null);
    const[loaded,setLoaded] = useState(false);

    //paid bills data count number store
    const[dataLeng,setDataLeng] = useState(0);

    // this state for recall billsdata
    const [dataChanges,setDataChanges] = useState(false);

    // here store all paid biiling information
    const [paidBillsData,setPaidBillsData] = useState(null);

    // logout function
    const logout = () => {
        setUserLoad(false);
        localStorage.removeItem('authData');
        localStorage.removeItem('encryptJWTToken');
    };

    // update data function
    const handleUpdateData = (data) => {
        return setToggleModal({...toggleModal,stateBool: true,action: 'update',payload: data});
    }

    // table skelton visible state
    const [tableSkl,setTableSkl] = useState(false);

    // delete data function
    const handleDeleteData = (data) => {
        return setToggleModal({...toggleModal,stateBool: true,action: 'delete',payload: data});
    }

    // notify toast
    const notifyErr = (text) => {
        return toast.error(text, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    // notify toast
    const notifyWar = (text) => {
        return toast.warn(text, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    // notify toast
    const notifySucc = (text) => {
        return toast.success(text, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    };

    // auto fetch persist user
    useEffect(()=>{
        const userEncodedInfo = localStorage.getItem('authData');
        const source = axios.CancelToken.source();

        userEncodedInfo ? axios.get(`https://easy-pay-bills.vercel.app/checkUser`,{headers:{secretKey: userEncodedInfo}}).then(res => {
            setLoaded(true);
            if(res.data.acknowledge) return setUserLoad(true);
        }).catch(e => {
            setLoaded(undefined);
            if(e.response.status === 401) return logout();
        }) : setLoaded(true)

        return () => source.cancel();
    },[]);

    // fetch all paid bills data
    useEffect(()=>{
        setPaidBillsData(null);
        const source = axios.CancelToken.source();
        userLoad ?
            axios.get(`https://easy-pay-bills.vercel.app/billing-list?count=${dataLeng}`)
            .then(res => {
                return setPaidBillsData(res.data);
            })
            .catch(e =>console.log(e.message))
        : setPaidBillsData(null)
        return () => source.cancel();
    },[userLoad,dataLeng,dataChanges]);

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
        setPaidBillsData,
        setDataLeng,
        handleUpdateData,
        handleDeleteData,
        dataChanges,
        setDataChanges,
        tableSkl,
        setTableSkl,
        notifyErr,
        notifyWar,
        notifySucc
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