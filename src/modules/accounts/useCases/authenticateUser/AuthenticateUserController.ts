import { container } from "tsyringe"
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateuserUseCase"

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
        
        const token = await authenticateUserUseCase.execute({ email, password: password.toString() });

        return response.status(200).json(token);
    }
}

export { AuthenticateUserController }