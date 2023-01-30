import React from 'react';

const TableHead = ({val}) => {
    return (
        <tr className={`border-collapse text-white`}>
            {
                val.map((elm,idx) => <th key={idx} className={`bg-[#04AA6D] capitalize p-2 border border-[#ddd]`}>{elm}</th>)
            }
            <th className={`bg-[#04AA6D] p-2 border capitalize border-[#ddd]`}>action</th>
        </tr>
    );
};

export default TableHead;