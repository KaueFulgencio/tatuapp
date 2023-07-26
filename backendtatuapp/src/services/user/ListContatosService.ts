import { PrismaClient, User, Contato } from '@prisma/client';
import prismaClient from '../../prisma';

interface UserEmail {
  email: string;
}

class ListContatosService {
  async execute({ email }: UserEmail): Promise<Contato[] | null> {
    try {
      const user = await prismaClient.user.findFirst({
        where: { email },
        include: { contatos: true },
      });

      return user?.contatos ?? null;
    } catch (error) {
      throw new Error('Erro ao obter contatos do usuário.');
    }
  }
}

export { ListContatosService };
