require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const path = require("path");

const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

app.get("/api/data", async (req, res) => {
  const data = await db("data").select();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
