import express from "express";

import cors from "cors";
import { routes } from "./server";

const app = express();
const port = 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => console.log(`-> Running at http://localhost:${port}`));
