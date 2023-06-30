import React from "react";
import { styled } from "styled-components";
import DashBoard from "../component/DashBoard";
import zIndex from "@mui/material/styles/zIndex";

const Settings = () => {

const SettingModal = styled.div`
width:650px;
height: 75%;
position: fixed;
left:40%;
top:20%;
background-color:white;
border-radius: 30px;


`;
const TitleFont = styled.p`
font-size: 25px;
font-weight:700;
padding: 60px 0 0 60px;
margin:0
`;

const SettingForm = styled.div`
    padding:30px 0 0 63px;
    display:flex;
    flex-direction:column;
    gap:10px;
`;

const Input = styled.input`
    width: 500px;
    height: 40px;
    margin-top: 10px;
    outline: 3px solid #d8d9db;
    border-radius:5px;
    border:none;
    font-size:20px;
    padding-left:10px;
`;

const Label = styled.p`
    font-weight:600;
    margin-bottom:0;
`;

const Button = styled.button`
    width: 520px;
    height: 40px;
    border:none;
    border-radius:5px;
    background-color:#202123;
    color:white;
    font-size:18px;
    font-weight:500
`;
    return(

        <>
            <DashBoard/>
            <SettingModal>
            <TitleFont>My Account</TitleFont>
                <SettingForm>
                <Label>UserName  </Label>
                    <label style={{position:"relative"}}>
                        <Input placeholder="Name" type="text" maxLength={10}></Input>
                        <button type="submit"
                        style={{position:"absolute", width:100, height:35, top:12, right:80, borderRadius:5, color:'white', backgroundColor:'#202123', fontSize:15, fontWeight:600}}>
                        Edit</button>
                    </label>
                    <Label>Email Address </Label>
                    <Input placeholder="Email" type="email"></Input>
                    <Label>Password</Label>
                    <Input placeholder="Password" type="password"></Input>
                    <Input placeholder="New Password Check" type="password"></Input>

                    <Button style={{marginTop:50}}>Change Password</Button>
                    <Button style={{backgroundColor:'#929292'}}>Withdrawal</Button>
                </SettingForm>


            </SettingModal>

        </>
    );
};

export default Settings;