import React, { useState } from 'react';
import { Button } from '@mui/material';
const EmailInput = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>이메일</label>
            <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleInputChange}
                placeholder='이메일을 입력해주세요'
            />
        </form>
    );
};

export default EmailInput;
