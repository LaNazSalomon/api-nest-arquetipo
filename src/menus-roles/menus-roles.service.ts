import { Injectable } from '@nestjs/common';
import { CreateMenusRoleDto } from './dto/create-menus-role.dto';
import { UpdateMenusRoleDto } from './dto/update-menus-role.dto';

@Injectable()
export class MenusRolesService {
  create(createMenusRoleDto: CreateMenusRoleDto) {
    return 'This action adds a new menusRole';
  }

  findAll() {
    return `This action returns all menusRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menusRole`;
  }

  update(id: number, updateMenusRoleDto: UpdateMenusRoleDto) {
    return `This action updates a #${id} menusRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} menusRole`;
  }
}
