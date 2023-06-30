const REST_API_KEY = 'eb0d0d262cffdeaa26a0620b27fc9ed0';
const REDIRECT_URI = 'http://localhost:4001/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


// //인가코드 받기

// const express = require('express');
// const axios = require('axios');
// const querystring = require('querystring');

// const app = express();

// const client_id ='eb0d0d262cffdeaa26a0620b27fc9ed0';
// const redirect_uri = 'http://localhost:4001/callback';
// const client_secret = 'IDMiJqI9TAPLgyn1cX0XNHO4j69ktINo';

// app.get('/api/kakao/callback', async (req, res) => {
//   const code = req.query.code;

//   // Kakao API로부터 access_token 및 refresh_token 받아오기
//   const response = await axios.post(
//     'https://kauth.kakao.com/oauth/token',
//     querystring.stringify({
//       grant_type: 'authorization_code',
//       client_id: client_id,
//       redirect_uri: redirect_uri,
//       code: code,
//       client_secret: client_secret,
//     }),
//     {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//     }
//   );

// // access_token으로 사용자 정보 가져오기
// const userResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
// headers: {
//     // 받은 access_token을 헤더에 포함하여 요청
//     'Authorization': `Bearer ${response.data.access_token}`,
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
// },
// });

// // 사용자 정보 출력
// console.log(userResponse.data);

// // 필요한 작업 수행 후, 클라이언트로 응답
// res.redirect('/'); // 예시로 '/'로 리다이렉트하였습니다.
// });

// app.listen(4001, () => {
// console.log('Server listening on port 4001');
// });
