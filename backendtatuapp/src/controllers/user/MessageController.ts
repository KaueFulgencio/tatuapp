import { MessageService } from '../../services/user/MessageService'
import { Request, Response } from 'express';

class MessageController {
  async handle(req: Request, res: Response) {
    try {
      const { senderId, recipientId, content } = req.body;

      const message = await MessageService.execute({senderId, recipientId, content});

      return res.status(200).json({ message: 'Mensagem enviada com sucesso!', data: message });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      return res.status(500).json({ error: 'Ocorreu um erro ao enviar a mensagem.' });
    }
  }
};

export { MessageController };
