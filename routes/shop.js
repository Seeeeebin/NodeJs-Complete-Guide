const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // send로 응답을 보냄
  //res.send("<h1>hello from express</h1>");

  // dirname : 운영체제의 절대경로를 해당 프로젝트 폴더로 고정해주는 전역변수
  //res.sendFile(path.join(rootDir, "views", "shop.html"));

  //const products = adminData.products;
  //res.render("shop", { prods: products, docTitle: "Shop" }); // 두번쨰 인수는, 동적 표시할 데이터
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
