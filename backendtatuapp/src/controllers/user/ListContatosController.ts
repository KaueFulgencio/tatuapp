import { Request, Response } from 'express';
import { ListContatosService } from '../../services/user/ListContatosService';

const contatoService = new ListContatosService();

class ListContatosController {
  async handle(req: Request, res: Response) {
    const { email } = req.query;
    try {
      const contatos = await contatoService.execute({ email: email as string });
      res.json({ success: true, contatos });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar contatos do usuário.' });
    }
  }
}

export { ListContatosController };
