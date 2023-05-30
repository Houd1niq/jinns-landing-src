import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminAuthService } from './adminAuth.service';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from '../auth/strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AdminController],
  providers: [AdminService, AdminAuthService, AtStrategy],
})
export class AdminModule {}
