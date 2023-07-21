import {Request, Response, response } from 'express'
import {CreateUserService} from '../../services/user/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, telefone, password} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name, 
            email,
            telefone,
            password
        });

        return res.json(user)
    }
}

export {CreateUserController}