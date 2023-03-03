const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const { pool } = require("./db");

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    // ? 부분은 변수
    const data = await pool.query(`INSERT INTO menus (menu_name, menu_description, menu_img_link)
    VALUES (?, ?, ?)`, [req.body.menu_name, req.body.menu_description, req.body.menu_img_link]);
    return res.json(data[0]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
