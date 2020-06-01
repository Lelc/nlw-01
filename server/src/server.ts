import express, { response } from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de users");

  response.json(["1", "2", "3", "4"]);
});

app.listen(3333);
