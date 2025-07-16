/*
 * En los DTOs se definira como es que queremos recibir la data de lado de nuestro cliente con algunas reglas
 * a tomar en cuenta
 */

import { IsBoolean, IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Se espera que los/el nombres sean de tipo texto' })
  nombres: string;

  @IsString({ message: 'Se espera que el apellido paterno sea de tipo texto' })
  apellido_paterno: string;

  @IsString({ message: 'Se espera que el apelllido materno sea de tipo texto' })
  apellido_materno: string;

  @IsString( { message: 'Se esperaba que el username fuera string' } )
    username: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  telefono: string;

  //! Los DTOs aun no estan implementados 16/07/2025
  //TODO: Implementar roles cuando se creen (creo que no cambia mucho en el DTO)
  @IsString( { message: 'Se espera un string' } )
  id_rol: string;

  @IsBoolean( { message: 'El estatus tiene que ser true o false' } )
  status: boolean;
}
