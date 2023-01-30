import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/Loading-Spinner/LoadingSpinner';
import { DataContext } from '../../Context/DataProv';

const PrivatePage = ({children}) => {
    const {userLoad,loaded} = useContext(DataContext);
    if(loaded === undefined) return <p>Nework Issue</p>
    if(!loaded) return <LoadingSpinner></LoadingSpinner>
    if(!userLoad) return <Navigate to={'/login'}></Navigate>;
    return children;
};

export default PrivatePage;