import prismaClient from "../../prisma";

interface UserListMessagesRequest{
    senderId: string;
    recipientId: string;
}

const ListMessagesService = {
  async execute({senderId, recipientId}: UserListMessagesRequest) {
    try {
      const messages = await prismaClient.message.findMany({
        where: {
          OR: [
            { senderId: senderId, recipientId: recipientId },
            { senderId: recipientId, recipientId: senderId },
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

export {ListMessagesService}
