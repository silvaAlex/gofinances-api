import { User } from "@modules/users/infra/typeorm/entities/User";

interface ICreateFinancesDTO {
  description: string;
  amount: number;
  type: string;
  date: Date;
  frequency:string;
  user_id: string;
}

export { ICreateFinancesDTO }
