import express, { request, response } from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json("Hello world!");
});

app.use("/categories", categoriesRoutes);

app.listen("3333", () => console.log("Servidor está rodando!"));
