import { Request, Response } from 'express';
import { EmailAuthService } from '../../services/user/EmailAuthService';

class EmailAuthController {
  async handle(req: Request, res: Response) {
    const { email } = req.params; 

    try {
      await EmailAuthService.execute({ email });

      return res.json({ message: 'E-mail de verificação enviado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao enviar e-mail de verificação' });
    }
  }
}

export { EmailAuthController };
