import { Module } from '@nestjs/common';
import { MenusModule } from './menus/menus.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { MenusRolesModule } from './menus-roles/menus-roles.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    MenusModule,
    AuthModule,
    RolesModule,
    MenusRolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
