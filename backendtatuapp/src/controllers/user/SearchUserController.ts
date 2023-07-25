import { Request, Response } from 'express';
import  { SearchUserService }  from '../../services/user/SearchUserService';

class SearchUserController {
  async handle(req: Request, res: Response) {
    const { email } = req.query;

    try {
      const searchUserService = new SearchUserService();
      const user = await searchUserService.execute({ email: email as string });

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
  }
}

export  {SearchUserController} ;
