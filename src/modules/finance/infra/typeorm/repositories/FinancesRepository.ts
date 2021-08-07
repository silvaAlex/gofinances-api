import { ICreateFinancesDTO } from '@modules/finance/dtos/ICreateFinancesDTO';
import {
  IFinances,
  IFinancesRepository,
} from '@modules/finance/repositories/IFinancesRepository';
import { getRepository, Repository } from 'typeorm';
import { Finance } from '../entities/Finance';

class FinancesRepository implements IFinancesRepository {
  private ormRepository: Repository<Finance>;

  constructor() {
    this.ormRepository = getRepository(Finance);
  }

  public async findById(id: string): Promise<Finance | undefined> {
    const finance = await this.ormRepository.findOne(id);

    return finance;
  }

  public async financesByUser({
    user_id,
    type,
    frequency,
  }: IFinances): Promise<Finance[] | undefined> {
    const finances = await this.ormRepository.find({
      where:{
        user_id,
        frequency,
        type
      },
      relations: ['users']
    });

    return finances;
  }

  public async create(data: ICreateFinancesDTO): Promise<Finance> {
    const finance = this.ormRepository.create(data)

    await this.ormRepository.save(finance);

    return finance;
  }

  public async save(finance: Finance): Promise<Finance> {
    await this.ormRepository.save(finance);

    return finance;
  }

  public async remove(id: string): Promise<void> {
    const finance = await this.ormRepository.delete(id)
  }
}

export { FinancesRepository }
