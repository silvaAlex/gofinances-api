import { ICreateFinancesDTO } from "@modules/finance/dtos/ICreateFinancesDTO";
import { IFinancesRepository } from "@modules/finance/repositories/IFinancesRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";



@injectable()
class CreateFinanceUseCase {
  constructor(
    @inject("FinancesRepository")
    private financesRepository: IFinancesRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({description,amount,type,date,frequency,user_id }: ICreateFinancesDTO) : Promise<void> {
    const userAlreadyExists = await this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new AppError("User not exists");
    }

    await this.financesRepository.create({
      description,
      amount,
      type,
      date,
      frequency,
      user_id
    });

  }
}

export {CreateFinanceUseCase}
