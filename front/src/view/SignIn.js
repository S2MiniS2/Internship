import React, { Component }  from 'react';

import { styled } from "styled-components";
import "@fontsource/quicksand";
import HorizonLine from "../component/HorizonLine";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    
const navigate = useNavigate();
    
const navigateToDashBoard = () => {
    alert("로그인 되었습니다");
    navigate("/DashBoard");
};


/**** Style ****/
const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10% 0 0 30%;
    background-color:"#d1d6db"
`;

const SignInFont= styled.p`
    font-size:26px;
    font-weight:700;
`;


const Input=styled.input`
    width:740px;
    height: 40px; 
    border:none;
`;

const SignInButton = styled.button`
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

const LinkSection = styled.div`
    padding-top:30px;
    padding-left:340px;
    display: inline-block;
    width: 1000px;
`;
const StyledLink = styled(Link)`
    font-family: "Quicksand";
    font-size: large;
    font-weight:900;
    text-decoration: none;

    padding-left: 250px;    
    color:grey;

    width:fit-content;
`;



    return(
        <>
            <SignIn>

            <SignInFont>SIGN IN</SignInFont>

            <p>Eamil</p>
            <Input
            type="text" autoFocus
            placeholder="Your Email address"
            /* value={email} */
            required

            style={{fontSize:'16px'}}
            />

            <HorizonLine />

            <p>Password</p>
            <Input
            placeholder="Your Password"
            /* value={password} */
            required

            style={{fontSize:'16px'}}
            />
            <HorizonLine />
            <SignInButton 
                onClick={navigateToDashBoard}
                type="submit"
            >SIGN IN</SignInButton>
            
            </SignIn>
            <LinkSection>  
                <StyledLink to='/SignUp'>Need Account? <span style={{color:'black'}}>Sign up</span> </StyledLink>
                <StyledLink to='/FindPassword'>Forgot Password? <span style={{color:'black'}}>Find Password</span></StyledLink>
            </LinkSection>
        </>


    );
}; 

export default SignIn;