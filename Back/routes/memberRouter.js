const express = require("express");
const router = express.Router(); //express 라우터 호출 후 router변수에 넣음
const User = require("../schemas/user");
const crypto = require("crypto");


//회원가입 member/join
router.post("/join", async (req, res) => {

  try {
    let obj = { email: req.body.email };

    let user = await User.findOne(obj);
    console.log(user);

    if (user) {
      res.json({
        message: "이메일이 중복되었습니다. 새로운 이메일을 입력해주세요.",
        dupYn: "1"
      });
    } else {
      crypto.randomBytes(64, (err, buf) => {
        if (err) {
          console.log(err);
        } else {
          crypto.pbkdf2(
            req.body.password,
            buf.toString("base64"),
            100000,
            64,
            "sha512",
            async (err, key) => {
              if (err) {
                console.log(err);
              } else {
                console.log(key.toString("base64"));
                buf.toString("base64");
                obj = { 
                  email: req.body.email,
                  name: req.body.name,
                  password: key.toString("base64"),
                  salt: buf.toString("base64")
                };  //post방식은 body쪽에 파라미터를 넘겨줌
                    //email : req.body.email : email이라는 key값에 body쪽에 받은 email 값 가져옴

                user = new User(obj);   //obj변수를 만들어 new User에 셋팅, obj확인
                await user.save();  //user.save를 통해 mongodb에 insert save 실행확인
                  //user객체 확ㄱ인 , save()확인
                res.json({ message: "회원가입 되었습니다!", dupYn: "0" ,
                email: user.email,
                name: user.name  
              });
              }
            }
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});
// 로그인
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ message: "아이디나 패스워드가 일치하지 않습니다." });
    }

    const hashedPassword = await hashPassword(req.body.password, user.salt);
    if (user.password !== hashedPassword) {
      if (user.loginCnt > 4) {
        return res.json({
          message:
            "아이디나 패스워드가 5회 이상 일치하지 않아 잠겼습니다.\n고객센터에 문의 바랍니다.",
        });
      }
      await User.updateOne(
        { email: req.body.email },
        { $set: { loginCnt: user.loginCnt + 1 } }
      );
      if (user.loginCnt >= 5) {
        await User.updateOne(
          { email: req.body.email },
          { $set: { lockYn: true } }
        );
        return res.json({
          message:
            "아이디나 패스워드가 5회 이상 일치하지 않아 잠겼습니다.\n고객센터에 문의 바랍니다.",
        });
      }
      return res.json({ message: "아이디나 패스워드가 일치하지 않습니다." });
    }

    await User.updateOne({ email: req.body.email }, { $set: { loginCnt: 0 } });
    req.session.email = user.email;
    res.json({
      message: "로그인 되었습니다!",
      _id: user._id,
      email: user.email,
      salt: user.salt,
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "로그인 실패" });
  }
});

// 비밀번호 수정
router.post("/update", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ message: false, error: "User not found" });
    }
    console.log("user",user)
    const hashedPassword = await hashPassword(req.body.password, user.salt);
    await User.updateOne(
      { email: req.body.email },
      { $set: { password: hashedPassword } }
    );
    res.json({ message: true });
  } catch (err) {
    console.log("update err", err);
    res.json({ message: false, error: err.message });
  }
});

// 비밀번호 해싱 함수
async function hashPassword(password, salt) {
  const hashedPassword = await new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      salt,
      100000,
      64,
      "sha512",
      (err, key) => (err ? reject(err) : resolve(key.toString("base64")))
    );
  });
  return hashedPassword;
}

router.get("/logout", (req, res) => {
  console.log("/logout" + req.sessionID);
  req.session.destroy(() => {
    res.json({ message: true });
  });
});

//post방식으로 보냈을 때 delete를 탄다.
//post, get방식을 맞춰줘야 함 그렇지 않으면, 404 error
// "/delete"는 앞에 생략되어있음. 즉, ="member/delete"

router.post("/delete", async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.body._id
    });
    res.json({ message: true });
    
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  
  }
});


router.post("/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: true });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

router.post("/getAllMember", async (req, res) => {
  try {
    const user = await User.find({});  //user 값 찾음
    res.json({ message: user });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;

//라우터 내보내기를 해야만 사용 가능
