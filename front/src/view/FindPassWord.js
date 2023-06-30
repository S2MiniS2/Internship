import { styled } from "styled-components";
import HorizonLine from "../component/HorizonLine";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate, Link  } from "react-router-dom";
import React, { Component }  from 'react';


const FindPassWord = () => {

const navigate=useNavigate();

const navigateToSignIn = () => {
    navigate("/SignIn");
};

const SendEmail = () => {
    alert("입력한 이메일로 임시비밀번호를 발급하였습니다. \n발급된 임시비밀번호로 재로그인하세요");
}


const FindPassWord = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10% 0 0 30%;
    background-color:"#d1d6db"
`;

const FindPassWordFont= styled.p`
    font-size:26px;
    font-weight:700;
`;


const Input=styled.input`
    width:740px;
    height: 40px; 
    border:none;
`;

const FindPassWordButton = styled.button`
    width: 740px;
    height: 40px;
    border-radius: 10px 10px 10px 10px;
    margin-top: 50px;
    background-color:#202123;
    color: white;
    font-family: "Quicksand";
    font-size: large;
    font-weight:900;

`;

const GoSignInButton = styled.button`
    width: 740px;
    height: 40px;
    border-radius: 10px 10px 10px 10px;
    margin-top: 10px;
    background-color:#c0c0c0;
    color: white;
    border:0;
    font-family: "Quicksand";
    font-size: large;
    font-weight:900;
`;

const StyledLink = styled(Link)`
    font-family: "Quicksand";
    font-size: large;
    font-weight:900;
    text-decoration: none;
    padding-left: 250px;
    padding-top: 30px; 
    color:grey;

    width:fit-content;
`;

    return(
    <>
        <ArrowBackIosNewIcon
            onClick={navigateToSignIn}
            style={{padding:'30px 0 0 30px'}}
        ></ArrowBackIosNewIcon>

        <FindPassWord>

        <FindPassWordFont>FIND PASSWORD</FindPassWordFont>

        <p>Email</p>
        <Input
            type="text" autoFocus
            placeholder="Your Eamil"
            /* value={email} */
            required
            style={{fontSize:'16px'}}
        /> <HorizonLine/>

        <FindPassWordButton 
            type="submit"
            onClick={SendEmail}
        >SEND EMAIL</FindPassWordButton>
        
        <GoSignInButton
            onClick={navigateToSignIn}
        >SIGN IN
        </GoSignInButton>

        <StyledLink to='/SignUp'>Don't have Account? <span style={{color:'black'}}>Sign Up</span></StyledLink>

        </FindPassWord>

        </>

   
    );
};

export default FindPassWord;