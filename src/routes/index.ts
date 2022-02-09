import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.get("/", (request, response) => {
    response.json("Api rodando!");
});

router.use("/categories", categoriesRoutes);
router.use("/users", usersRoutes);
router.use("/specifications", specificationRoutes);

export { router };
