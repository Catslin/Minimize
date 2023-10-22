const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

app.post("/save", (req, res) => {
  const fileName = req.body.fileName;
  const submitTime = req.body.submitTime;
  const markdownContent = req.body.markdownContent;

  // 在这里执行保存操作，根据需求进行具体处理
  // 这里只是一个示例，你需要根据自己的项目进行调整

  // 假设保存成功，返回成功的响应
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("服务器已启动，监听端口3000");
});