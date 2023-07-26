import { PrismaClient, User } from '@prisma/client';
import prismaClient from '../../prisma'

interface SearchUserByEmailRequest {
  email: string;
}

class SearchUserService {
  async execute({ email }: SearchUserByEmailRequest): Promise<User | null> {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });

      return user || null; 
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  }
}

export {SearchUserService} ;
