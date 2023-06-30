import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from "jquery";
import {} from "jquery.cookie";

const Header = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    const login_id = $.cookie("login_id");
    if (login_id) {
    setIsLoggedIn(true);
    }
    
}, []);

const handleLogout = () => {
    axios
    .get("http://localhost:8080/member/logout")
    .then(() => {
        $.removeCookie("login_id");
        alert("로그아웃 되었습니다!");
        setIsLoggedIn(false);
        window.location.href = "/";
    });
};

return (
    <header className='nav_bar'>
    <div className='logo2'>
        <Link to='/'>
        <img
            alt='img'
            className='home_logo'
            src='/img/Home.gif'
        ></img>
        </Link>
        <div className='menu'>
        <Link to='skill'>
            <p>기능</p>
        </Link>
        <Link to='price'>
            <p>가격</p>
        </Link>
        <Link to='counsulting'>
            <p>컨설팅</p>
        </Link>
        <p>Go to App</p>
        </div>
    </div>

    {isLoggedIn ? (
        <div className='Login'>
        <button onClick={handleLogout} className='logout'>
            로그아웃
        </button>
        <Link to='mypageform'>마이페이지</Link>
        </div>
    ) : (
        <div className='Login'>
        <Link to='Signin'>
            <p>로그인</p>
        </Link>
        <Link to='signup'>
            <p>회원가입</p>
        </Link>
        </div>
    )}
    </header>
);
};

export default Header;
