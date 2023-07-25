import {Router} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import {AuthUserController} from './controllers/user/AuthUserController';
import { SearchUserController }  from "./controllers/user/SearchUserController"
import { AddContactController } from './controllers/user/AddContactController';

const router = Router();

router.post('/users', new CreateUserController().handle)
router.post('/login', new AuthUserController().handle)
router.post('/contato', new AddContactController().handle)
router.get('/search', new SearchUserController().handle)

export { router };