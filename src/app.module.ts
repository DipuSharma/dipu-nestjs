import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import * as Host from './config/config'
@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'postgres',
      host: Host.HOST_SERVER.DB_HOST,
      port: 5432,
      username: Host.HOST_SERVER.DB_USER_NAME,
      password: Host.HOST_SERVER.DB_PASSWORD,
      database: Host.HOST_SERVER.DB,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
  }),
  AuthModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
