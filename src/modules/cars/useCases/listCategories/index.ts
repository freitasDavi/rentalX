import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListaCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default () => {
    const categoriesRepository = new CategoriesRepository();

    const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
    
    const listCategoriesController = new ListaCategoriesController(
        listCategoriesUseCase
    );

    return listCategoriesController;
}

