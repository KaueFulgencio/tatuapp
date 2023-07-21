import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    name: string;
    email: string;
    telefone: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, telefone, password}: UserRequest){

        if(!email){
            throw new Error("Email incorreto")
        }
        const userAlrerdyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if(userAlrerdyExists){
            throw new Error("Email já cadastrado")
        }

        const passwordHash = await hash(password, 9)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                telefone: telefone,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true
        }     
    })

        return user;
    }
}

export {CreateUserService}