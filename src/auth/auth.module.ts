import { LocalAuthGuard } from './auth.guard';
import { LooseStrategy, StrictStrategy } from './auth.strategy';
import { ConfigModule } from '@nestjs/config';
import { Users } from '../socialLogin/entity/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, StrictStrategy, LooseStrategy],
  imports: [ConfigModule, TypeOrmModule.forFeature([Users])],
  exports: [AuthService, LocalAuthGuard],
})
export class AuthModule {}
