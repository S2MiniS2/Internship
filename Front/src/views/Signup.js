import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'; //usehistory
import { KAKAO_AUTH_URL } from '../utils/kakao';
import SignupForm from './SignupForm';

import FooterPage from '../components/FooterPage';

//import { KAKAO_AUTH_URL } from '../components/OAuth';

function Copyright(props) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link
                a
                href='http://www.bizpeer.co.kr'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'inherit' }}
            >
                Bizzpeer
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const buttonStyle = {
        marginTop: 10,
        marginBottom: 10,
        width:350
      };

    return (
        <div style={{ marginTop: '100px' }}>
            <ThemeProvider theme={theme}>
                <Container component='main' maxWidth='xs'>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar> 회원가입
                        
                        <SignupForm></SignupForm>
                            {/* <Button 
                                style={buttonStyle}
                                fullWidth
                                variant='contained'
                                sx={{ mb: 2 }}
                                // onClick={KakaoRedirectHandler}
                                href={KAKAO_AUTH_URL}
                                
                            >
                                카카오로 회원가입하기
                            </Button>  */}
                            <Grid container justifyContent='flex-end'>
                                <Grid item>
                                    <Link href='signin' variant='body2'>
                                        이미 계정이 있습니까? 로그인
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    
                        <Copyright sx={{ mt: 8, mb: 25 }} />
        
                </Container>
            </ThemeProvider>
        <FooterPage></FooterPage>
        </div>

        
    );
}
