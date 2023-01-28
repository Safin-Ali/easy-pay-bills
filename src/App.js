import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';

function App() {
  return (
    <>
      <Appbar></Appbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
