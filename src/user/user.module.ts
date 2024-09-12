import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  controllers: [UserResolver],
  providers: [PrismaService, UserService],
  imports: [PrismaModule],
})
export class UserModule {}
