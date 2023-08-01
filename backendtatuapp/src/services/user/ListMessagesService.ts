// Service
import prismaClient from "../../prisma";

interface UserListMessagesRequest {
  senderEmail: string;
  recipientEmail: string;
}

const ListMessagesService = {
  async execute({ senderEmail, recipientEmail }: UserListMessagesRequest) {
    try {
      const messages = await prismaClient.message.findMany({
        where: {
          OR: [
            { sender: { email: senderEmail }, recipient: { email: recipientEmail } },
            { sender: { email: recipientEmail }, recipient: { email: senderEmail } },
          ],
        },
      });

      return messages;
    } catch (error) {
      console.error('Erro ao recuperar mensagens:', error);
      throw new Error('Ocorreu um erro ao recuperar as mensagens.');
    }
  },
};

export { ListMessagesService };
