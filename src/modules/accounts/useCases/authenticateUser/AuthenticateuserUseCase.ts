import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {

    }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // usuario existe
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new Error("Email or password incorrect!");
        }
        // senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email or password incorrect!");
        }

        // gerar jsonwebtoken
        const token = sign({}, "davizera", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }
        
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }