import nodemailer from 'nodemailer';
import prismaClient from '../../prisma';

interface UserRequest {
  email: string;
}

const EmailAuthService = {
  async execute({ email }: UserRequest) {
    try {
      const user = await prismaClient.user.findFirst({
        where: { email },
      });

      if (!user) {
        throw new Error('Usuário não encontrado.');
      }

      const verificationCode = this.generateVerificationCode();

      await prismaClient.user.update({
        where: { id: user.id },
        data: { emailVerificationCode: verificationCode },
      });

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'kawe1448@gmail.com', 
          pass: 'lion2015', 
        },
      });

      const mailOptions = {
        from: 'kawe1448@gmail.com', 
        to: user.email,
        subject: 'Verificação de E-mail',
        text: `Seu código de verificação é: ${verificationCode}`,
      };
  
      await transporter.sendMail(mailOptions);

      return { message: 'E-mail de verificação enviado com sucesso.' };
    } catch (error) {
      console.error('Erro ao enviar e-mail de verificação:', error);
      throw new Error('Ocorreu um erro ao enviar o e-mail de verificação.');
    }
  },

  generateVerificationCode() {
    return '123456'; 
  },
};

export { EmailAuthService };
