import { Request, Response, NextFunction } from "express";
import { ListMessagesService } from '../../services/user/ListMessagesService';
import cache from 'memory-cache';
//5 minutos
const cacheDuration = 5 * 60 * 1000;

// Verifica se os dados estão no cache
const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const cacheKey = req.originalUrl || req.url;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  } else {
    next();
  }
};

class ListMessagesController {
  async handle(req: Request, res: Response) {
    const { senderEmail, recipientEmail } = req.params;

    try {
      const messages = await ListMessagesService.execute({ senderEmail, recipientEmail });

      // Armazena os dados em cache
      cache.put(req.originalUrl || req.url, { data: messages }, cacheDuration);

      return res.status(200).json({ data: messages });
    } catch (error) {
      console.error('Erro ao recuperar mensagens:', error);
      return res.status(500).json({ error: 'Ocorreu um erro ao recuperar as mensagens.' });
    }
  }
}

export { ListMessagesController };
