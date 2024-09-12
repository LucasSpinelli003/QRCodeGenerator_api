import { Prisma } from '@prisma/client';

export type EditUserArgs = Prisma.UserUncheckedUpdateInput & {
  id: string;
};

export type EditUserParam = {
  id: string;
};
