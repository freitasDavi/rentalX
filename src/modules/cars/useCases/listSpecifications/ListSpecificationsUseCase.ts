import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

@injectable()
class ListSpecificationsUsecase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: SpecificationsRepository) {}

    async execute(): Promise<Specification[]> {
        return await this.specificationsRepository.listAll();
    }
}

export { ListSpecificationsUsecase };
