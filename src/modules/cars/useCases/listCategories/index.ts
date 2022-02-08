import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListaCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListaCategoriesController(
    listCategoriesUseCase
);

export { listCategoriesController };
