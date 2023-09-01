const path = require("path");

// 전역 프로세스 변수 사용
module.exports = path.dirname(process.mainModule.filename);
