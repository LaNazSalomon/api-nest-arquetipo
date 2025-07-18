import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenusRolesService } from './menus-roles.service';
import { CreateMenusRoleDto } from './dto/create-menus-role.dto';
import { UpdateMenusRoleDto } from './dto/update-menus-role.dto';

@Controller('menus-roles')
export class MenusRolesController {
  constructor(private readonly menusRolesService: MenusRolesService) {}

  @Post()
  create(@Body() createMenusRoleDto: CreateMenusRoleDto) {
    return this.menusRolesService.create(createMenusRoleDto);
  }

  @Get()
  findAll() {
    return this.menusRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menusRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenusRoleDto: UpdateMenusRoleDto) {
    return this.menusRolesService.update(+id, updateMenusRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menusRolesService.remove(+id);
  }
}
