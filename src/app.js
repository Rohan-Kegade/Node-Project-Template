import express from "express";

const app = express();

app.use("/api", (req, res) => {
  res.send("Hello World!");
});

export default app;
