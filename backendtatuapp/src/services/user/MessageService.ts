import prismaClient from '../../prisma'

interface UserMessageRequest{
    senderId: string;
    recipientId: string;
    content: string;
}

const MessageService = {
  async execute({senderId, recipientId, content}: UserMessageRequest) {
    try {
      const senderExists = await prismaClient.user.findUnique({
        where: { id: senderId },
      });

      const recipientExists = await prismaClient.user.findUnique({
        where: { id: recipientId },
      });

      if (!senderExists || !recipientExists) {
        throw new Error('Destinatário não encontrado.');
      }

      const message = await prismaClient.message.create({
        data: {
          content,
          senderId,
          recipientId,
        },
      });

      return message;
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      throw new Error('Ocorreu um erro ao enviar a mensagem.');
    }
  },
};

export { MessageService };
