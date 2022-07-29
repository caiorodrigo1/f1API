import express from "express";

import { circuitsRoutes } from "./routes/circuits.routes";

const app = express();

app.use(express.json());

app.use("/circuits", circuitsRoutes);

app.listen(3090, () => console.log("Server up at port 3090"));
