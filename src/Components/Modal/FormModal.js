import React, { useContext } from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import {IoClose} from 'react-icons/io5';
import ReactDOM from 'react-dom';
import { DataContext } from '../../Context/DataProv';
import handleDynaForm from '../../Hooks/handleDynaForm';
const modalId = document.getElementById('form-modal');

const FormModal = () => {

    const {toggleModal,setToggleModal,closeToggle} = useContext(DataContext);



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

    const handleForm = (obj) => {
        
    }

    return ReactDOM.createPortal(
        <section className={`absolute ${toggleModal.stateBool ? 'visited:' : 'invisible'} bg-[#000000c2] top-0 overflow-hidden w-full h-screen transition-all duration-[500ms]`}>

                <div className={'w-[90%] sm:w-1/2 lg:w-[30%] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]'}>

                    {/* Add payment */}
                    <form onSubmit={handleDynaForm(handleForm)} className={`bg-gray-300 transition-transform ${toggleModal.stateBool ? 'scale-100' : 'scale-0'} duration-[500ms] pb-5 border-2 rounded-md`}>

                            {/* close button */}
                            <div className={`flex justify-end`}>
                                <div onClick={()=>setToggleModal(closeToggle)} className={`p-[1%] m-2 cursor-pointer border border-[#696969fa]`}>
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
                            <PrimaryButton center={true}>SUBMIT</PrimaryButton>
                    </form>
                </div>
        </section>
        ,modalId
    );
};

export default FormModal;