import React from 'react';

const TableRow = ({val}) => {
    console.log(val)
    if(val?.length) {

        // create dynamicly tr element
        return val.map((elm) => <tr key={elm._id} className={`even:bg-[#f2f2f2] text-center hover:bg-zinc-200 duration-150`}>

            {/* dynamicly created td element by property */}
                {
                    Object.keys(elm).map((val,idx) => <td key={idx} className={`p-2 border border-[#ddd]`}>
                        {elm[val]}</td>
                    )
                }
            </tr>
        );
    }
};

export default TableRow;