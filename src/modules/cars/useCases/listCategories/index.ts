import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListaCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListaCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
