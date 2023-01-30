import React, { useContext, useEffect } from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import {IoClose} from 'react-icons/io5';
import ReactDOM from 'react-dom';
import { DataContext } from '../../Context/DataProv';
import handleDynaForm from '../../Hooks/handleDynaForm';
import fetchPost from '../../Hooks/fetchPost';
import fetchPatch from '../../Hooks/fetchPatch';
import fetchDelete from '../../Hooks/fetchDelete';

const modalId = document.getElementById('form-modal');

const FormModal = () => {

    const {toggleModal,setToggleModal,closeToggle,notifyWar,setDataChanges,dataChanges,setTableSkl,setPaidBillsData,paidBillsData} = useContext(DataContext);

    const feildSchema = {
        'Full Name': 'fullName',
        Email: 'email',
        Phone: 'phoneNum',
        Payment: 'amount'
    };

    // hide modal when clicked ESC button
    if(toggleModal.stateBool) {
        document.addEventListener('keydown',(e)=>{
            if(e.key === "Escape") return setToggleModal(closeToggle);
        })
    };

    const handleForm = async (obj,clearForm) => {

        if(obj.phoneNum.length < 11) return notifyWar('Please provide 11 digit number')

        // add new bills
        if(toggleModal.action === 'post'){
            setTableSkl(true);
            if(paidBillsData?.count+1 > paidBillsData?.count){
                setPaidBillsData({...paidBillsData,count: paidBillsData.count+1})
            }
            const res = await fetchPost(`https://easy-pay-bills.vercel.app/add-billing`,obj,{authorization: `bearer ${localStorage.getItem('encryptJWTToken')}`});
            if(res.acknowledged) {
                setToggleModal(closeToggle);
                clearForm();
                setTableSkl(false);
                return setDataChanges(!dataChanges);
            };
        };

        // update bills
        if(toggleModal.action === 'update') {
            setTableSkl(true);
            const res = await fetchPatch(`https://easy-pay-bills.vercel.app/update-billing/${toggleModal.payload._id}`,obj,{authorization: `bearer ${localStorage.getItem('encryptJWTToken')}`});
            if(res.modifiedCount > 0) {
                setToggleModal(closeToggle);
                clearForm();
                setTableSkl(false);
                return setDataChanges(!dataChanges);
            };
        };
    };

    // handle deleteData
    const handleDeleteData = async () => {
        const res = await fetchDelete(`https://easy-pay-bills.vercel.app/delete-billing/${toggleModal.payload?._id}`,'',{authorization: `bearer ${localStorage.getItem('encryptJWTToken')}`})
            if(res.deletedCount > 0) {
                setToggleModal(closeToggle);
                return setDataChanges(!dataChanges);
            };
    }

    return ReactDOM.createPortal(
        <section className={`fixed ${toggleModal.stateBool ? 'visited:' : 'invisible'} bg-[#000000c2] top-0 overflow-hidden w-full h-screen transition-all duration-[500ms]`}>

            <div className={'w-[90%] sm:w-1/2 lg:w-[30%] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]'}>


                { toggleModal.action !== 'delete' ?

                    <form onSubmit={handleDynaForm(handleForm)} className={`bg-gray-300 transition-transform ${toggleModal.stateBool ? 'scale-100' : 'scale-0'} duration-[500ms] pb-5 border-2 rounded-md`}>

                    {/* close button */}
                    <div className={`flex justify-end`}>
                    <div onClick={()=>{
                        document.body.style.overflow = 'auto';
                        return setToggleModal(closeToggle);
                    }} className={`p-[1%] m-2 cursor-pointer border border-[#696969fa]`}>
                        <IoClose className={`text-3xl`}></IoClose>
                    </div>
                    </div>

                    <div className={`px-[10%]`}>
                        <h4 className={`text-center text-2xl font-semibold`}>Add New payment</h4>
                    </div>

                    {/* dynamicly input feild */}
                    <div className={`px-[10%]`}>
                    {
                        Object.keys(feildSchema).map((elm,idx) => {
                            return <div key={idx} className={`my-3`}>
                             <p>{elm}</p>

                            <input className={`p-1 w-full rounded-md`} name={feildSchema[elm]} type={elm === "Phone" || elm === "Payment"  ? 'number' : elm === 'Email' ? 'email' : 'text'} required/>

                        </div>
                        })
                    }
                    </div>
                    {/* submit btn */}
                        <PrimaryButton center={true}>{toggleModal.action?.toUpperCase()}</PrimaryButton>
                    </form> :

                    <div className={`bg-gray-300 transition-transform ${toggleModal.stateBool ? 'scale-100' : 'scale-0'} duration-[500ms] pb-5 border-2 rounded-md`}>

                        <h4 className={`text-center text-2xl font-semibold my-5`}>Are you sure delete?</h4>

                        <p className={`font-semibold text-center my-5`}>Id:<em> {toggleModal.payload._id}</em></p>

                        <div className={`flex justify-center gap-5`}>
                            <PrimaryButton onClick={handleDeleteData}>Yes</PrimaryButton>
                            <PrimaryButton onClick={()=> setToggleModal(closeToggle)} className={`bg-[#c02424] hover:bg-[#b30202] ring-[#c41e1e]`}>Not</PrimaryButton>
                        </div>
                    </div>
                }

            </div>

        </section>
        ,modalId
    );
};

export default FormModal;