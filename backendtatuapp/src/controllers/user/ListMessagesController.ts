import { Request, Response } from "express";
import { ListMessagesService } from '../../services/user/ListMessagesService'

class ListMessagesController {
  async handle(req: Request, res: Response) {
    const { senderEmail, recipientEmail } = req.params;

    try {
      const messages = await ListMessagesService.execute({ senderEmail, recipientEmail });

      return res.status(200).json({ data: messages });
    } catch (error) {
      console.error('Erro ao recuperar mensagens:', error);
      return res.status(500).json({ error: 'Ocorreu um erro ao recuperar as mensagens.' });
    }
  }
}

export { ListMessagesController };
