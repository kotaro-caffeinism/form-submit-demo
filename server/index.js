require("dotenv").config({ path: "./.env.local" });

const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const knex = require("knex");
const config = require("../knexfile");
const db = knex(config);

const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

app.delete("/", async (req, res) => {
  console.log("accept delete request");
  await db("data").del();
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

app.get("/api/data", async (req, res) => {
  const data = await db("data").select();
  res.json(data);
});

app.listen(PORT, async () => {
  await db.migrate.latest();
  await db.seed.run();
  console.log(`app listening on port ${PORT}`);
});
