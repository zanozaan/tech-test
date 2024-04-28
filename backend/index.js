import express from "express";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(4001, () => console.log("Server is running..."));
