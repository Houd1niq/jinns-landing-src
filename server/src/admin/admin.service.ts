import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import { join } from 'path';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import * as process from 'process';

const pathToTemplate = join(__dirname, '..', '..', 'src', 'email', 'test.hbs');

@Injectable()
export class AdminService {
  constructor(readonly prisma: PrismaService) {}

  async addUser(name: string, email: string, question?: string) {
    console.log(name, email, question);
    return this.prisma.user.create({
      data: {
        discordName: name,
        email,
        message: question,
      },
    });
  }

  async sendEmailAllUsers(title: string, heading: string, text: string) {
    const source = fs.readFileSync(pathToTemplate, 'utf8');
    const template = handlebars.compile(source);
    const html = template({
      title,
      heading,
      text,
    });
    const users = await this.prisma.user.findMany();

    const transporter = nodemailer.createTransport({
      host: 'smtp.timeweb.ru',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    users.forEach((user) => {
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: title,
        html: html,
      };
      transporter.sendMail(mailOptions);
    });
  }
}
