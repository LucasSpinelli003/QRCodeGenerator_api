import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [UserService],
})
export class AppModule {}
