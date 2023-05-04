import React from 'react';
import Layout from './app/pages/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './app/pages/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
      {/* <img src={logo} alt="" /> */}
        
    </>
  );
}

export default App;
