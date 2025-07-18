import { PartialType } from '@nestjs/mapped-types';
import { CreateMenusRoleDto } from './create-menus-role.dto';

export class UpdateMenusRoleDto extends PartialType(CreateMenusRoleDto) {}
