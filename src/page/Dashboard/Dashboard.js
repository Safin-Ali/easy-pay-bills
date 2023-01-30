import React, { useContext } from 'react';
import {BsSearch} from 'react-icons/bs';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import { DataContext } from '../../Context/DataProv';
import TableHead from '../../Components/Table/TableHead';
import TableRow from '../../Components/Table/TableRow';
import PaginationWrapper from '../../Components/Pagination/PaginationWrapper';
import TableSkeltonRow from '../../Components/Table/TableSkeltonRow';
import TableSkelton from '../../Components/Table/TableSkelton';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {

    const {toggleModal,setToggleModal,setDataLeng,tableSkl,paidBillsData,setPaidBillsData} = useContext(DataContext);

    const tableHead = ["bill id", "full name","email","phone","paid amount"];

    // set pagination length and recall databage
    const handlePagenation = (num) => {
        return setDataLeng(num*10)
    };

    // searchBar feild
    const handleSearch = (e) => {
        e.preventDefault();

        const keyword = e.target.value;
        setPaidBillsData(null);

        axios.get(`https://easy-pay-bills.vercel.app/serachKeyword/?keywords=${keyword}`)

        .then(res => setPaidBillsData({...paidBillsData,count:res.data.length,data:res.data}))
        .catch(err => console.log(err.response.data.message));
    }

    return (
        <section className={`m-[2%] overflow-x-hidden md:overflow-auto lg:overflow-auto`}>

            {/* top section */}
            <div>
                <div className={`flex flex-col md:flex-row justify-between gap-5 bg-white border rounded-tl-lg rounded-tr-lg p-2 items-center my-4 shadow-md`}>
                    <div className={`flex items-center gap-5`}>
                        <h5 className={`text-2xl font-semibold`}>Bills</h5>
                        {/* Searchbar */}
                        <div className={`border border-[#24252638] rounded-md flex items-center`}>

                            <div className={`border-r border-[#24252638] p-2`}>
                                <BsSearch></BsSearch>
                            </div>

                            {/* Search Feild */}
                            <div>
                                <input onChange={handleSearch} type="text" className={`w-full p-1 outline-none pl-3`}/>
                            </div>
                            </div>
                    </div>
                    <PrimaryButton onClick={()=>setToggleModal({...toggleModal,action:'post',stateBool: true})}>Add New Bill</PrimaryButton>
                </div>
            </div>

            {/* table section */}
            <div className={`w-full overflow-x-scroll md:overflow-auto`}>
                <table className={`w-full`}>
                    <tbody>
                        <TableHead val={tableHead}></TableHead>
                        {
                            !paidBillsData ?
                            <TableSkelton trow={10}></TableSkelton> :
                            !paidBillsData.data.length ? <tr><td><p className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold capitalize text-center`}>no record found</p></td></tr> :
                            <TableRow val={paidBillsData?.data}></TableRow>
                        }

                        {
                            tableSkl && <TableSkeltonRow></TableSkeltonRow>
                        }
                    </tbody>
                </table>
            </div>

            <PaginationWrapper dataLeng={paidBillsData?.count || 0} callBackFunc={handlePagenation} perPage={10}>
            </PaginationWrapper>
            <ToastContainer />
        </section>
    );
};

export default Dashboard;