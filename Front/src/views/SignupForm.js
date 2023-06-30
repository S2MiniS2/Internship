import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-v3";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class SignupForm extends Component {
  componentDidMount() {
    loadReCaptcha("6LfGieAUAAAAAJSOoqXS5VQdT_e5AH8u0n2e1PDb");
  }

  verifyCallback = recaptchaToken => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  };

  join = () => {
    const joinEmail = this.joinEmail.value;
    const joinName = this.joinName.value;
    const joinPw = this.joinPw.value;
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const regExp2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (joinEmail === "" || joinEmail === undefined) {
      alert("이메일 주소를 입력해주세요.");
      this.joinEmail.focus();
      return;
    } else if (
      joinEmail.match(regExp) === null ||
      joinEmail.match(regExp) === undefined
    ) {
      alert("이메일 형식에 맞게 입력해주세요.");
      this.joinEmail.value = "";
      this.joinEmail.focus();
      return;
    } else if (joinName === "" || joinName === undefined) {
      alert("이름을 입력해주세요.");
      this.joinName.focus();
      return;
    } else if (joinPw === "" || joinPw === undefined) {
      alert("비밀번호를 입력해주세요.");
      this.joinPw.focus();
      return;
    } else if (
      joinPw.match(regExp2) === null ||
      joinPw.match(regExp2) === undefined
    ) {
      alert("비밀번호를 숫자와 문자, 특수문자 포함 8~16자리로 입력해주세요.");
      this.joinPw.value = "";
      this.joinPw.focus();
      return;
    }

    const send_param = {
      headers,
      email: this.joinEmail.value,
      name: this.joinName.value,
      password: this.joinPw.value
    };
    axios
      .post("http://localhost:8080/member/join", send_param)  //정상 수행
      .then((returnData) =>
        {
        console.log(returnData)
        if (returnData.status===200) {
          localStorage.setItem("이메일",returnData.data.email)
          localStorage.setItem("이름",returnData.data.name)
          alert(returnData.data.message);

          window.location.href="/signin"
         }
         else {
          alert("회원가입 실패");
        }
          
          //이메일 중복 체크
          if (returnData.data.dupYn === "1") {
            this.joinEmail.value = "";
            this.joinEmail.focus();
          } else {
            this.joinEmail.value = "";
            this.joinName.value = "";
            this.joinPw.value = "";
          }
        
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
 
  render() {
    const formStyle = {
      margin: 50
    };
    const buttonStyle = {
      marginTop: 10,
      marginBottom: 10,
      width:350
    };
    const handleKeyPress = e => {
      if(e.key === 'Enter') {
        this.join();
      }
    }

    return (
      <div style={{paddingTop:10, width:350, display:"flex", flexDirection:"column", gap:10, margin:"0 auto"}}>
       

        <Form.Group controlId="joinForm">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control
            type="email"
            maxLength="100"
            ref={ref => (this.joinEmail = ref)}
            placeholder="이메일 주소를 입력하세요"
            onKeyPress={handleKeyPress}
          />
          <Form.Text className="text-muted">
          </Form.Text>
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            maxLength="20"
            ref={ref => (this.joinName = ref)}
            placeholder="이름을 입력하세요"
            onKeyPress={handleKeyPress}
          />
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            maxLength="64"
            ref={ref => (this.joinPw = ref)}
            placeholder="비밀번호를 입력하세요"
            onKeyPress={handleKeyPress}
          />
          <Button
            style={buttonStyle}
            onClick={this.join}
            variant="primary"
            type="button"
            
          >
            회원가입
          </Button>
        </Form.Group>

       
      </div>
    );
  }
}

export default SignupForm;
