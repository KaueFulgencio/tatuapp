import { Request, Response } from 'express';
import { AddContactService } from '../../services/user/AddContactService'

class AddContactController {
  async handle(request: Request, response: Response) {
    const { email, contato, telefone } = request.body;

    const addContactService = new AddContactService();

    try {
      const newContact = await addContactService.execute({ email, contato, telefone });
      
      if (!newContact) {
        return response.status(404).json({ error: "Usuário não encontrado." });
      }

      return response.status(201).json(newContact);
    } catch (error) {
      return response.status(500).json({ error: "Erro ao adicionar contato." });
    }
  }
}

export { AddContactController };
