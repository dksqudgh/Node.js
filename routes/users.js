var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* 회원가입 */
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName: 'pages/users/join.ejs', email: null });
});
/* 장바구니 */
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'pages/users/cart.ejs', email: null });
});
/* MyPage */
router.get('/mypage', function(req, res, next) {
  res.render('index', { title: 'MyPage', pageName: 'pages/users/mypage.ejs', email: null });
});
/* 회원정보수정 */
router.get('/update', function(req, res, next) {
  res.render('index', { title: '회원정보수정', pageName: 'pages/users/update.ejs', email: null });
});

module.exports = router;
