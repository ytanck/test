var http = require("http");
var moment = require("moment");
const { consola, createConsola } = require("consola");

var url = require("url");
const app = http
  .createServer(function (request, response) {
    var urlObj = url.parse(request.url, true);
    var time = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(request.url);
    // 内容类型: text/plain。并用charset=UTF-8解决输出中文乱码
    response.writeHead(200, {
      "Content-Type": "text/plain; charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    });
    response.end("Hello World! 这是简单的web服务器test!\n" + time);
  })
  .listen(3000);
// 终端打印如下信息
console.log("Server running at http://127.0.0.1:3000/");

consola.log("Using consola 31.0.0");
consola.info("Using consola 3.0.0");
consola.start("Building project...");
consola.warn("A new version of consola is available: 3.0.1");
consola.success("Project built!");
// consola.error(new Error("This is an example error. Everything is fine!"));
consola.box("I am a simple box");
// consola.prompt("Deploy to the production?", {
//   type: "confirm",
// });