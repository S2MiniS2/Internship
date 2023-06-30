import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './views/Home';
import Signup from './views/Signup';
import Signin from './views/Signin';
import Skill from './views/Skill';
import Counstulting from './views/Counstulting';
import Price from './views/Price';
import Header from './components/Header';
import KakaoRedirectHandler from './utils/KakaoRedirectHandler';
import MypageForm from './views/MypageForm';
import LoginForm from './views/LoginForm';
import { Component } from 'react';

function App() {
    return (
        <>
            <Header />
            <Routes>
                
                <Route path='/' element={<Home />}  />
                <Route path='/signin' element={<Signin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/skill' element={<Skill />} />
                <Route path='/counsulting' element={<Counstulting />} />
                <Route path='/price' element={<Price />} />
                <Route path="/mypageform" element={<MypageForm/>}/>
                <Route
                    path='/oauth/callback/kakao'
                    element={<KakaoRedirectHandler />}
                />
                
        
              
            </Routes>

            
        </>
    );
}
export default App;
