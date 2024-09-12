import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserArgs } from './dto/args/createUser.args';
import { UserModel } from './dto/output/userModel.output';
import { UserService } from './user.service';
import { EditUserArgs, EditUserParam } from './dto/args/editUser.args';

@Controller('user')
export class UserResolver {
  constructor(private readonly service: UserService) {}
  @Post()
  async createUser(@Body() args: CreateUserArgs): Promise<UserModel> {
    return await this.service.createUser(args);
  }

  @Get(':id')
  async getUserById(@Param() id: EditUserParam): Promise<UserModel | null> {
    return await this.service.getUserById(id);
  }

  @Put('edit/:id')
  async editUser(
    @Param() id: EditUserParam,
    @Body() args: EditUserArgs,
  ): Promise<UserModel | null> {
    return await this.service.editUser(id, args);
  }
}
