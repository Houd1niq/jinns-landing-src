import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    PrismaModule,
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'uploads'), // Путь до папки с файлами
        serveRoot: '/uploads', // URL-адрес, по которому можно получить доступ к файлам
      },
      {
        rootPath: join(__dirname, '..', 'static'),
      },
    ),
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '..', 'public'), // Путь до папки с файлами, куда будут сохраняться загруженные файлы
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.fieldname + '-' + uniqueSuffix); // Генерируем уникальное имя для каждого файла
        },
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
    }),
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
