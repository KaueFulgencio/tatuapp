import prismaClient from '../../prisma';

interface UserMessageRequest {
  senderEmail: string;
  recipientEmail: string;
  content: string;
}

const MessageService = {
  async execute({ senderEmail, recipientEmail, content }: UserMessageRequest) {
    try {
      const senderExists = await prismaClient.user.findFirst({
        where: { email: senderEmail },
      });

      const recipientExists = await prismaClient.user.findFirst({
        where: { email: recipientEmail },
      });

      if (!senderExists || !recipientExists) {
        throw new Error('Destinatário não encontrado.');
      }

      const message = await prismaClient.message.create({
        data: {
          content,
          senderId: senderExists.id,
          recipientId: recipientExists.id,
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
