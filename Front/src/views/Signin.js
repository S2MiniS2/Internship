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
import LoginForm from './LoginForm';
import FooterPage from '../components/FooterPage';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link a href='http://www.bizpeer.co.kr' target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>
        Bizzpeer
        </Link>{' '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    
    );
}

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get('email');
  const password = data.get('password');


  loginEmail(email, password)
    .then((result) => {
      console.log(result);
      const user = result.user;
      loginSuccess(user.email, user.uid);
    })
    .catch((error) => console.log(error));
};

const theme = createTheme();



export default function SignIn() {

  return (
    <div style={{marginTop : '100px'}}>
    
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap:2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> 로그인
        <LoginForm></LoginForm>
       
        <Link href="/signup" variant="body2">
          {"계정이 없습니까? 회원가입하기"}
        </Link>
      
          </Box>
        <Copyright sx={{ mt: 8, mb: 35 }} />
        
 
        <FooterPage></FooterPage>
    </div>
  );
}

