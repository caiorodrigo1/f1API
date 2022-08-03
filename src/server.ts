import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3090, () => console.log("Server up at port 3090"));
