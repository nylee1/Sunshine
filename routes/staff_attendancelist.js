var express = require("express");
var app = express();
var router = express.Router();
var connection = require("../config/db"); //디비 사용위해 필요, connection.query()식으로 사용

router.get("/", function (req, res) {
  
    if (req.session.uid) {
      res.render("staff_attendancelist");
       /*
    여기에 render("staff_attendancelist", { data: context, data1: context1 }) 이런식으로 데이터 넘겨주는 쿼리 작성
     쿼리 작성끝내면 위의 res.render("staff_attendancelist");문은 지워야함(res.render("staff_attendancelist")는 staff_attendance.ejs을 렌더링 할것이라는 뜻)
    */
      
    } else {
      res.write(
        "<script type='text/javascript'>alert('Please log in');</script>"
      );
      res.write(
        "<script type='text/javascript'>location.href='/login'</script>"
      );
    
  }
});

module.exports = router;