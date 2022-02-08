import { Request, Response } from "express";
import { ListSpecificationsUsecase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUsecase) {}

    handle(request: Request, response: Response): Response {
        const allSpecifications = this.listSpecificationsUseCase.execute();

        return response.status(200).json(allSpecifications);
    }
}

export { ListSpecificationsController };
