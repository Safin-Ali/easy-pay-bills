import React from 'react';
import Table from '../../Components/Table/Table';
import {BsSearch} from 'react-icons/bs';

const Dashboard = () => {
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

                    <div>
                    <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Bill</button>
                    </div>
                </div>
            </div>
            <Table></Table>
        </section>
    );
};

export default Dashboard;