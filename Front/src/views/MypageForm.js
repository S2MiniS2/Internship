import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import {} from 'jquery.cookie';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const MypageForm = () => {
const divStyle = {
margin: 50,
};
const marginBottom = {
marginBottom: 5,
};

const [password, setPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [validPassword, setValidPassword] = useState('');
const [coincidePw, setCoincidePw] = useState('');

const email = localStorage.getItem('이메일');
const name = localStorage.getItem('이름');

const handleWithdrawal = () => {

const id = localStorage.getItem('id');

if (window.confirm("탈퇴하면 데이터를 복구할 수 없습니다.  정말로 탈퇴하시겠습니까?")){

    axios
    .post('http://localhost:8080/member/delete', {_id:id}, headers)

    .then(() => {
    localStorage.removeItem('login_id');
    })
    .catch((err) => {
    console.error("에러발생",err);
        alert('회원 탈퇴 도중 오류가 발생하였습니다.');
    });

    $.removeCookie('login_id');
    alert("탈퇴되었습니다.")
    window.location.href='/';
    
}else {
    alert("취소되었습니다")
}





};
const handleKeyPress = e => {
    if(e.key === 'Enter') {
      handleUpdate();
    }
  }


const handleUpdate = () => {
if (!isValidPassword(newPassword)) {
    alert('올바른 비밀번호 형식이 아닙니다');
    return;
}
if (password !== newPassword) {
    alert('입력한 비밀번호와 일치하지 않습니다');
    return;
}


axios
    .post('http://localhost:8080/member/update', { password: newPassword, email : email }, headers)
    .then(() => {
    alert('비밀번호가 변경되었습니다.');
    window.location.reload();
    })
    .catch((err) => {
    console.error(err);
    alert('비밀번호 변경 도중 오류가 발생하였습니다.');
    });
};

const handlePw = (e) => {
setPassword(e.target.value);
if (!isValidPassword(e.target.value)) {
    setValidPassword('올바른 비밀번호 형식이 아닙니다');
} else {
    setValidPassword('');
}
};

const handleRepeatPW = (e) => {
setNewPassword(e.target.value);
if (password !== e.target.value) {
    setCoincidePw('입력한 비밀번호와 일치하지 않습니다');
} else {
    setCoincidePw('');
}
};



const isValidPassword = (password) => {
const passRule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
return passRule.test(password);
};

return (
<div
    style={{
    paddingTop: 100,
    width: 550,
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    margin: '0 auto',
    
    }}
>   

    
    <p className='text01'>회원 정보</p>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>이메일 주소</Form.Label>
    
    

    <Form.Control type="email" disabled value={$.cookie("login_email")} />
    <Form.Label>이름</Form.Label >
            <Form.Control type='text' disabled value={name}/>
    </Form.Group>
    <Button variant='primary' onClick={handleWithdrawal} >
            회원 탈퇴
    </Button>

    <p className='text01'>비밀번호 변경</p>
    <Form.Group controlId="formBasicEmail">
            <Form.Label>변경할 비밀번호 입력</Form.Label>
            <Form.Control
                type='password'
                placeholder='새로운 비밀번호를 입력하세요'
                value={password}
                onChange={handlePw}
                onKeyPress={handleKeyPress}
            />
            {validPassword ? (
                <span>{validPassword}</span>
            ) : (
                <Form.Label>변경할 비밀번호 재입력</Form.Label>
            )} 

            { <Form.Control
                type='password'
                placeholder='새로운 비밀번호를 재입력하세요'
                value={newPassword}
                onChange={handleRepeatPW}
                onKeyPress={handleKeyPress}
            /> } 
            <span>{coincidePw}</span>
        </Form.Group>
        <Button variant='primary' block style={marginBottom}  onClick={handleUpdate}>
            회원정보 수정
        </Button> 
           
    </div>
);
};

export default MypageForm;