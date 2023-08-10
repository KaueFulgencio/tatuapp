import { Request, Response } from 'express';
import { ListContatosService } from '../../services/user/ListContatosService';
import cache from 'memory-cache';

// 5 minutos
const cacheDuration = 5 * 60 * 1000; 

const listContatosService = new ListContatosService();

class ListContatosController {
  async handle(req: Request, res: Response) {
    const { email } = req.query;
    const cacheKey = `listContatos:${email}`;

    // Verifica se os dados estão no cache
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.json(cachedData);
    }

    try {
      const contatos = await listContatosService.execute({ email: email as string });

      // Armazena os dados em cache
      cache.put(cacheKey, { success: true, contatos }, cacheDuration);

      res.json({ success: true, contatos });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar contatos do usuário.' });
    }
  }
}

export { ListContatosController };
