// import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import qs from "qs";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//     const REST_API_KEY = 'eb0d0d262cffdeaa26a0620b27fc9ed0';
// const REDIRECT_URI = 'http://localhost:4001/oauth/callback/kakao';
//   const CLIENT_SECRET = "IDMiJqI9TAPLgyn1cX0XNHO4j69ktINo";

//     const code = new URL(window.location.href).searchParams.get("code");
    
//     const navigate = useNavigate();

//     const getToken = async () => {
//         const payload = qs.stringify({
//             grant_type: "authorization_code",
//             client_id: REST_API_KEY,
//             redirect_uri: REDIRECT_URI,
//             code: code,
//             client_secret: CLIENT_SECRET,
//         },
//         console.log(code));

//         try {
//         // access token 가져오기
//         const res = await axios.post(
//           "https://kauth.kakao.com/oauth/token",
//           payload
//         );
        
//         // Kakao Javascript SDK 초기화
//         window.Kakao.init(REST_API_KEY);
//         // access token 설정
//         window.Kakao.Auth.setAccessToken(res.data.access_token);
//         navigate("/profile");
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         getToken();
//       }, []);
//     return null;
// };

// export default Auth;