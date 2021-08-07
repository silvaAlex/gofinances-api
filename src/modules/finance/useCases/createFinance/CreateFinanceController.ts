import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFinanceUseCase } from "./CreateFinanceUseCase";
class CreateFinanceController {
  async handle(req: Request, res: Response){

    const {description, amount,type,date,frequency,user_id } = req.body;
    const createUserUseCase = container.resolve(CreateFinanceUseCase);

    await createUserUseCase.execute({
      description,
      amount,
      type,
      date,
      frequency,
      user_id
    });

    res.status(201).send();

  }
}

export {CreateFinanceController}
