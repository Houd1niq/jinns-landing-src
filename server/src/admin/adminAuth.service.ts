import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthAdminDto } from './dto/AuthAdminDto';

@Injectable()
export class AdminAuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(dto: AuthAdminDto): Promise<{ access_token: string }> {
    const adminCount = await this.prisma.admin.count();
    if (adminCount === 0) {
      await this.prisma.admin.create({
        data: {
          password: dto.password,
          name: dto.login,
        },
      });
    }

    const candidate = await this.prisma.admin.findUnique({
      where: {
        name: dto.login,
      },
    });
    if (!candidate) {
      throw new ForbiddenException('Неверный логин или пароль');
    }
    if (dto.password !== candidate.password)
      throw new ForbiddenException('Неверный логин или пароль');
    return await this.getTokens(candidate.id, candidate.name);
  }

  async logout(id: number) {
    await this.prisma.admin.update({
      where: { id },
      data: {
        password: null,
      },
    });
    return { name, message: 'logged out' };
  }

  async getTokens(id: number, name: string): Promise<{ access_token: string }> {
    const [at] = await Promise.all([
      this.jwtService.signAsync(
        { id, name, role: 'admin' },
        { expiresIn: 60 * 60 * 24, secret: process.env.AC_TOKEN_SECRET },
      ),
    ]);
    return { access_token: at };
  }
}
