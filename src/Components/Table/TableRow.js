import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProv';
import PrimaryButton from '../Button/PrimaryButton';
import TableSkelton from './TableSkelton';

const TableRow = ({val}) => {

    const {handleUpdateData,handleDeleteData} = useContext(DataContext);

    return(
        val.map((elm) => <tr key={elm._id} className={`even:bg-[#f2f2f2] text-center hover:bg-zinc-200 duration-150`}>

            {/* dynamicly created td element by property */}
                {
                    Object.keys(elm).map((val,idx) => <td key={idx} className={`p-2 border border-[#ddd]`}>
                        {elm[val]}</td>
                    )
                }
                <td className={`p-2 border border-[#ddd] flex justify-center gap-5`}>
                        <PrimaryButton onClick={()=> handleUpdateData(elm)} className={`text-xs`} padding={'py-2 px-3'}>UPDATE</PrimaryButton>
                        <PrimaryButton onClick={()=>handleDeleteData(elm)} className={`text-xs bg-[#c02424] hover:bg-[#b30202] ring-[#c41e1e]`} padding={'py-2 px-3'}>DELETE</PrimaryButton>
                </td>
            </tr>
        )
    )
};

export default TableRow;