import { useEffect } from 'react';

const KakaoRedirectHandler = () => {
  const client_id ='eb0d0d262cffdeaa26a0620b27fc9ed0';
  const redirect_uri = 'http://localhost:4001'; // 변경된 redirect_uri

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init(client_id);
      window.Kakao.Auth.authorize({
        redirectUri: redirect_uri
      });
    };
  }, []);

  return null;
};

export default KakaoRedirectHandler;
