const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// parma : requestHandler
// next : use에 함수의 인수로 전달함
//        next에서 수신하는 함수는 다음 미들웨어로 요청이 이동할 수 있도록 실행되어야함
// app.use((req, res, next) => {
//   console.log("In the middle ware");
//   next(); // Allows the request to continue to the next middleware in line
//   //응답을 보내지 않으면, next를 호출해야함
//   //그러지 않을 경우, 요청이 실패하고 다음 미들웨어로 이어지지 않음
// });

// app.use("/", (req, res, next) => {
//   console.log("This always run!");
//   next();
// });

router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     "<form action='/admin/add-product' method='POST'><input type='text' name ='title'><button type='submit'>Add Product</button></form>"
  //   );

  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// .get => GET 요청에서만 작동
// .post => POST 요청에서만 작동
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });

  res.redirect("/");
});

exports.routes = router;
exports.products = products;
