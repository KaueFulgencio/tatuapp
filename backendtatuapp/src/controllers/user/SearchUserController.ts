import { Request, Response } from 'express';
import { SearchUserService } from '../../services/user/SearchUserService';
import cache from 'memory-cache';
// 5 minutos
const cacheDuration = 5 * 60 * 1000; 

class SearchUserController {
  async handle(req: Request, res: Response) {
    const { email } = req.query;
    const cacheKey = `searchUser:${email}`;
    // Verifica se os dados estão no cache
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.json(cachedData);
    }

    try {
      const searchUserService = new SearchUserService();
      const user = await searchUserService.execute({ email: email as string });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
      // Armazena os dados em cache
      cache.put(cacheKey, user, cacheDuration);

      return res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  }
}

export { SearchUserController };
