import express from "express";
import cors from "cors";
const app = express();

const port = 8080;

app.use(cors());
app.get("/", (_, res) => {
  res.send({ status: "ok" });
});

app.post("/markup", (_, res) => {
  res.send({
    markup: "<h1>hello world</h1>",
  });
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port http://127.0.0.1:${port}`);
})
