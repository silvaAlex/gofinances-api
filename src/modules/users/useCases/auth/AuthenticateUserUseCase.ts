import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import 'dotenv/config'
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken'

interface IRequest {
  email: string;
  password: string;
}

interface IUser {
  id: string | undefined,
  name: string,
  email:string,
}

interface IResponse {
  user: IUser,
  token:string,
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({email,password}:IRequest): Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    const secret = process.env.TOKEN_KEY;

    if(!user){
      throw new AppError("Email or password incorret!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorret!");
    }

    if(!secret){
      throw new AppError("TOKEN_KEY is not confirured");
    }

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: "2h",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };

    return tokenReturn
  }
}

export { AuthenticateUserUseCase };
