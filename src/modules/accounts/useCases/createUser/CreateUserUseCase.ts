import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository"

@injectable()
class CreateUserUseCase {
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }
        
        const hashPassword = await hash(password.toString(), 8);
        

        await this.usersRepository.create({
            name, driver_license, email, password: hashPassword
        });
    }
}

export { CreateUserUseCase }