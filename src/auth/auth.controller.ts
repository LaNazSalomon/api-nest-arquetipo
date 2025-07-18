/*
* Este es el controlador de los usuarios, esta el modulo puesto como auth pues se encarga de manejar la 
* seguridad pero basandose en los usuarios, asi que todo el modulo auth no es mas que el modulo de usuarios
* pero con autenticacion 
*/




import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  

  @Get()
  findAll( @Query() paginationDto: PaginationDto ) {
    return this.authService.findAllUsers( paginationDto );
  }


//term: termino ya que podemos buscar por nombre, rol, usuario
  @Get(':term')
  findByTerm(@Param('term') term: string) {
    return this.authService.findUsersByTerm( term );
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update(+id, updateAuthDto);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
