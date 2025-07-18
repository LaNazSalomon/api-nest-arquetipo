import { Module } from '@nestjs/common';
import { MenusRolesService } from './menus-roles.service';
import { MenusRolesController } from './menus-roles.controller';

@Module({
  controllers: [MenusRolesController],
  providers: [MenusRolesService],
})
export class MenusRolesModule {}
