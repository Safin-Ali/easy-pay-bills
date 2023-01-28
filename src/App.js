import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>nav</div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
