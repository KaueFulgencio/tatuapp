import prismaClient from "../../prisma";
//usado para comparar a senha digitado com a senha criptografada
import { compare } from 'bcryptjs';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password}: AuthRequest){
        
        const user = await prismaClient.user.findFirst({
            where: {
               email: email
            }
        })

        if(!user){
            throw new Error("Usuario ou senha incorretos")
        }
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Usuario ou senha incorretos")
        }

        

        return { ok: true}
    }
}

export { AuthUserService};