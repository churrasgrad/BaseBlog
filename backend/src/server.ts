import express from "express";
import cors from "cors";
import routes from "./shared/infra/http/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server started on PORT 3333!");
});
