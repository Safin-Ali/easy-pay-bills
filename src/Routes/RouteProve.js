import React from 'react';
import {RouterProvider} from 'react-router-dom';
import { routerPath } from './router';

const RouteProve = () => {
    return(<RouterProvider router={routerPath}>
        </RouterProvider>)
};

export default RouteProve;