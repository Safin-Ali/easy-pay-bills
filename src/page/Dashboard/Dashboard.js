import React, { useContext } from 'react';
import {BsSearch} from 'react-icons/bs';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import { DataContext } from '../../Context/DataProv';
import TableHead from '../../Components/Table/TableHead';
import TableRow from '../../Components/Table/TableRow';

const Dashboard = () => {

    const {toggleModal,setToggleModal,paidBillsData,setPaidBillsData} = useContext(DataContext);

    console.log(paidBillsData?.data?.slice(0,10))

    const tableHead = ["bill id", "full name","email","phone","paid amount"];

    return (
        <section className={`m-[2%]`}>

            {/* top section */}
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
                    <PrimaryButton onClick={()=>setToggleModal({...toggleModal,action:'post',stateBool: true})}>Add New Bill</PrimaryButton>
                </div>
            </div>

            {/* table section */}
            <div className={`w-full`}>

                <table className={`w-full`}>
                    <tbody>
                        <TableHead val={tableHead}></TableHead>
                        <TableRow val={paidBillsData?.data?.slice(0,10)}></TableRow>
                    </tbody>
                </table>

            </div>

        </section>
    );
};

export default Dashboard;