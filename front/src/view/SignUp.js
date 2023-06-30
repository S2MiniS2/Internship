import React, { Component }  from 'react';

import { styled } from "styled-components";
import "@fontsource/quicksand";
import HorizonLine from "../component/HorizonLine";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SignUp = () => {

const navigate = useNavigate();

const navigateToSignIn = () => {
    navigate("/SignIn");
};


/***유효성검사 ****/
// const joinEmail = this.joinEmail.value;
// const joinName = this.joinName.value;
// const joinPw = this.joinPw.value;
// const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
// if (joinEmail === "" || joinEmail === undefined) {
//     alert("이메일 주소를 입력해주세요.");
//     this.joinEmail.focus();
//     return;
// } else if (
//     joinEmail.match(regExp) === null ||
//     joinEmail.match(regExp) === undefined
// ) {
//     alert("이메일 형식에 맞게 입력해주세요.");
//     this.joinEmail.value = "";
//     this.joinEmail.focus();
//     return;
// } else if (joinName === "" || joinName === undefined) {
//     alert("이름을 입력해주세요.");
//     this.joinName.focus();
//     return;
// } else if (joinPw === "" || joinPw === undefined) {
//     alert("비밀번호를 입력해주세요.");
//     this.joinPw.focus();
//     return;
// } else if (
//     joinPw.match(regExp2) === null ||
//     joinPw.match(regExp2) === undefined
// ) {
//     alert("비밀번호를 숫자와 문자, 특수문자 포함 8~16자리로 입력해주세요.");
//     this.joinPw.value = "";
//     this.joinPw.focus();
//     return;
// }


/**** Style ****/

const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2% 0 0 30%;
    background-color:"#d1d6db"
`;

const SignUpFont= styled.p`
    font-size:26px;
    font-weight:700;
`;


const Input=styled.input`
    width:740px;
    height: 40px; 
    border:none;
`;

const SignUpButton = styled.button`
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

const StyledLink = styled(Link)`
    font-family: "Quicksand";
    font-size: large;
    font-weight:900;
    text-decoration: none;

    padding-top: 30px;
    padding-left: 250px;    
    color:grey;
`;


    return(
        <>
        <ArrowBackIosNewIcon
            onClick={navigateToSignIn}
            style={{padding:'30px 0 0 30px'}}
        ></ArrowBackIosNewIcon>
            <SignUp>

            <SignUpFont>SIGN UP</SignUpFont>

            <p>Name</p>
            <Input
                type="text" autoFocus
                placeholder="Your Name"
                /* ref={ref => (this.joinName = ref)} */
                maxLength="20"
                required
                style={{fontSize:'16px'}}
            /> <HorizonLine/>

            <p>Eamil</p>
            <Input
                type="email"
                placeholder="Your Email address"
                maxLength="64"
                /* ref={ref => (this.joinEmail = ref)} */
                required
                style={{fontSize:'16px'}}
            /> <HorizonLine />

            <p>Password</p>
            <Input
            type="password"
            placeholder="Your Password"                
            /* ref={ref => (this.joinPw = ref)} */
            style={{fontSize:'16px'}}
            /> <HorizonLine />

            <p>Password Check</p>
            <Input
            placeholder="Check Password"
            /* value={password} */
            style={{fontSize:'16px'}}
            /> <HorizonLine />

            <SignUpButton 
                type="submit"
            >SIGN UP</SignUpButton>
            <StyledLink to='/SignIn'>Do you have Account? <span style={{color:'black'}}>Sign In</span></StyledLink>
            </SignUp>
        </>


    );
}; 

export default SignUp;