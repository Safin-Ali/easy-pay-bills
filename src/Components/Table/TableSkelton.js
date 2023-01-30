import React from 'react';
import TableSkeltonRow from './TableSkeltonRow';

const TableSkelton = ({trow}) => {
    return (
        [...Array(trow).keys()].map(elm => <TableSkeltonRow key={elm}></TableSkeltonRow>)
    );
};

export default TableSkelton;