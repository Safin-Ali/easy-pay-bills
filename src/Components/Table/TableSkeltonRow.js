import React from 'react';

const TableSkeltonRow = () => {
    return (
        <tr>
            {
                [...Array(5).keys()].map(inte => <td key={inte} className={`p-4 bg-[#f1f2f3] animate-pulse border`}><div className={`w-full h-4 bg-[#CBD5E0] rounded-md`}></div></td>)
            }
            <td className={`p-4 bg-[#f1f2f3] animate-pulse border`}>
                <div className={`flex gap-5`}>
                    <div className={`w-full h-7 bg-[#CBD5E0] rounded-full`}></div>
                    <div className={`w-full h-7 bg-[#CBD5E0] rounded-full`}></div>
                </div>
            </td>
        </tr>
    );
};

export default TableSkeltonRow;