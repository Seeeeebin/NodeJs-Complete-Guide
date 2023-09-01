const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false })); // 미들웨어 함수 끝에서 next 호출
app.use(express.static(path.join(__dirname, "public"))); // 퍼블릭 폴더의 엑세스 허용

// 요청시 자동으로 ./routes/admin의 라우트 고려
// send이후에 작성하는 경우, 절대 도달할 수 없음
app.use("/admin", adminData.routes); // [/admin]으로 시작하는 라우트만 들어갈 수 있는 필터링 매커니즘
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  //res.status(404).send("<h1>Page not found</h1>");
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
