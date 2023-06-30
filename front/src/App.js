import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './view/SignIn';
import SignUp from './view/SignUp';
import FindPassWord from './view/FindPassWord'
import DashBoard from './component/DashBoard';
import DataView from './view/DataView';
import SummaryView from './view/SummaryView';
import React, { Component }  from 'react';
import AnalyticsView from './view/AnalyticsView';
import Settings from './view/Settings';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/SignIn' element={<SignIn/>} />
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/FindPassword' element={<FindPassWord/>} />
            <Route path='/DashBoard' element={<SummaryView/>} />
            <Route path='/SummaryView' element={<SummaryView/>} />
            <Route path='/DataView' element={<DataView/>} />
            <Route path='/AnalyticsView' element={<AnalyticsView/>} />
            <Route path='/Settings' element={<Settings/>} />
          </Routes>
          </BrowserRouter>
    </div>
  );
};

export default App;
