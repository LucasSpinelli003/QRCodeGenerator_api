import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModel } from './dto/output/userModel.output';
import { CreateUserArgs } from './dto/args/createUser.args';
import { CpfAlreadyUsed } from './error/cpf-already-in-use-error';
import { EmailAlreadyUsed } from './error/email-already-in-use-error';
import { EditUserArgs, EditUserParam } from './dto/args/editUser.args';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(args: CreateUserArgs): Promise<UserModel> {
    const cpfAlreadyUsed = await this.prisma.user.findFirst({
      where: {
        cpf: args?.cpf,
      },
    });
    if (cpfAlreadyUsed) {
      throw new CpfAlreadyUsed();
    }
    const emailAlreadyUsed = await this.prisma.user.findFirst({
      where: {
        cpf: args?.email,
      },
    });
    if (emailAlreadyUsed) {
      throw new EmailAlreadyUsed();
    }
    return await this.prisma.user.create({
      data: {
        name: args?.name,
        cpf: args?.cpf,
        email: args?.email,
      },
    });
  }

  async getUserById(param: EditUserParam): Promise<UserModel | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: param.id,
      },
    });
  }

  async editUser(
    param: EditUserParam,
    args: EditUserArgs,
  ): Promise<UserModel | null> {
    return await this.prisma.user.update({
      data: {
        ...args,
      },
      where: {
        id: param?.id,
      },
    });
  }
}
