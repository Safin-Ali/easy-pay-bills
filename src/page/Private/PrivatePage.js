import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/Loading-Spinner/LoadingSpinner';
import { DataContext } from '../../Context/DataProv';

const PrivatePage = ({children}) => {
    const {userLoad,loaded} = useContext(DataContext);
    if(loaded === undefined) return <div><img src="https://i.ibb.co/BfDNxJh/404-error-with-people-holding-the-numbers-bro.png" alt="Error_Image" /></div>
    if(!loaded) return <LoadingSpinner></LoadingSpinner>
    if(!userLoad) return <Navigate to={'/login'}></Navigate>;
    return children;
};

export default PrivatePage;