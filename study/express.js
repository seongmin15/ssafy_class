const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.get("/api/info", (req, res) => {
  return res.json({
    name: "ssafy1",
    job: "student",
  });
});

app.get("/api/info2", (req, res) => {
  return res.json({
    name: "ssafy2",
    job: "student",
    description: "hi",
  });
});

app.listen(PORT, () => console.log(`this server listenning on ${PORT}`));