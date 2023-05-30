import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AdminAuthService } from './adminAuth.service';
import { AuthAdminDto } from './dto/AuthAdminDto';
import { AdminService } from './admin.service';

type AdminPayloadType = {
  id: number;
  name: string;
  role: string;
};

@Controller('admin')
export class AdminController {
  constructor(
    readonly adminAuthService: AdminAuthService,
    readonly adminService: AdminService,
  ) {}

  @Post('add-user')
  async addUser(
    @Body() body: { name: string; email: string; question?: string },
  ) {
    return await this.adminService.addUser(
      body.name,
      body.email,
      body.question,
    );
  }

  @Post('signin')
  @HttpCode(HttpStatus.CREATED)
  async signIn(@Body() dto: AuthAdminDto, @Res() res: Response) {
    console.log(dto, 'here');
    const token = await this.adminAuthService.signIn(dto);
    return res.send({ accessToken: token.access_token });
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Req() req: Request) {
    const user = req.user as AdminPayloadType;
    const id = Number(user.id);
    return await this.adminAuthService.logout(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('mail')
  async sendMail(
    @Body() body: { title: string; heading: string; text: string },
  ) {
    return await this.adminService.sendEmailAllUsers(
      body.title,
      body.heading,
      body.text,
    );
  }
}
