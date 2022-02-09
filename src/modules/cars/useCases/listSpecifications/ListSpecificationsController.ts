import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationsUsecase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationsUseCase = container.resolve(ListSpecificationsUsecase);
        const allSpecifications = await listSpecificationsUseCase.execute();

        return response.status(200).json(allSpecifications);
    }
}

export { ListSpecificationsController };
