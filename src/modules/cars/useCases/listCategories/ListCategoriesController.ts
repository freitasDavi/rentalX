import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListaCategoriesController {
    constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const allCategories = await this.listCategoryUseCase.execute();

        return response.status(200).json(allCategories);
    }
}

export { ListaCategoriesController };
