import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';
import FormModal from './Components/Modal/FormModal';

function App() {
  return (
    <>
      <Appbar></Appbar>
      <Outlet></Outlet>
      <FormModal></FormModal>
    </>
  );
}

export default App;
