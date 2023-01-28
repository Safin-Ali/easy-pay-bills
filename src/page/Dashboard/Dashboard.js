import React, { useContext } from 'react';
import Table from '../../Components/Table/Table';
import {BsSearch} from 'react-icons/bs';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import { DataContext } from '../../Context/DataProv';

const Dashboard = () => {

    const {toggleModal,setToggleModal} = useContext(DataContext);

    return (
        <section className={`m-[2%]`}>
            <div>
                <div className={`flex justify-between gap-5 bg-white border rounded-tl-lg rounded-tr-lg p-2 items-center my-4 shadow-md`}>
                    <div className={`flex items-center gap-5`}>
                        <h5>Billings</h5>
                        {/* Searchbar */}
                        <div className={`border border-[#24252638] rounded-md flex items-center`}>

                            <div className={`border-r border-[#24252638] p-2`}>
                                <BsSearch></BsSearch>
                            </div>

                            {/* Search Feild */}
                            <div className={``}>
                                <input type="text" className={`w-full p-1 outline-none pl-3`}/>
                            </div>
                            </div>
                    </div>
                    <PrimaryButton onClick={()=>setToggleModal({...toggleModal,action:'get',stateBool: true})}>Add New Bill</PrimaryButton>
                </div>
            </div>
            <Table></Table>
        </section>
    );
};

export default Dashboard;