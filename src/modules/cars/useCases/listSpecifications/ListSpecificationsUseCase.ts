import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationsUsecase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute(): Specification[] {
        return this.specificationsRepository.listAll();
    }
}

export { ListSpecificationsUsecase };