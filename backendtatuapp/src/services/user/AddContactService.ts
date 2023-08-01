import prismaClient from "../../prisma";

interface AddContactRequest {
  email: string;
  contato: string;
  telefone: string;
}

class AddContactService {
  async execute({ email, contato, telefone }: AddContactRequest) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          email: email,
        },
      });
      if (!user) {
        return null;
      }
      const newContact = await prismaClient.contato.create({
        data: {
          contato: contato,
          telefone: telefone,
          userId: user.id,
        },
      });

      return newContact;
    } catch (error) {

      console.error("Erro ao adicionar contato:", error);
      throw new Error("Erro ao adicionar contato.");
    }
  }
}

export { AddContactService };
