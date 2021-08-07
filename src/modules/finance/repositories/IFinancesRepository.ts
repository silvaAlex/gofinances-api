import { Finance } from '../infra/typeorm/entities/Finance';
import { ICreateFinancesDTO } from '../dtos/ICreateFinancesDTO';

interface IFinances{
  user_id: string;
  type: string;
  frequency: string;
}

interface IFinancesRepository {
  findById(id: string): Promise<Finance | undefined>;
  financesByUser({
    user_id,
    type,
    frequency,
  }: IFinances): Promise<Finance[] | undefined>;
  create(data: ICreateFinancesDTO): Promise<Finance>;
  save(finance: Finance): Promise<Finance>;
  remove(id: string): Promise<void>;
}

export { IFinances, IFinancesRepository }
