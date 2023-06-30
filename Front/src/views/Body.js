import React, { Component } from "react";
import LoginForm from "./LoginForm";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriteForm";
import BoardDetail from "./BoardDetail";
import MypageForm from "./MypageForm";
import { Route } from "react-router-dom";
import $ from "jquery";
import {} from "jquery.cookie";
import Main from "./Main";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      console.log("쿠키 확인 콘솔",$.cookie("login_id"));
      if ($.cookie("login_id")) {
        resultForm = <Route exact path="/" component={Main}></Route>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={LoginForm}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return (
      <div>
        <Route path="/mypage" component={MypageForm}></Route>
       
        {resultForm}
      </div>
    );
  }
}

export default Body;
