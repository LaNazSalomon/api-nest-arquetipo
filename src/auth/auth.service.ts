import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UtilCA } from 'src/common/helpers/util-ca';
import { ManejadorErrores } from 'src/common/exceptions/ManejadorErrores';

@Injectable()
export class AuthService {
  constructor(
    //TODO: Implementacion de autenticacion
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  //Logica de creacion de un usuario --------------------
  async createUser(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      password: UtilCA.generarContrasenaAleatoria(8),
    };

    try {
      const userDB = this.userRepository.create(user);
      await this.userRepository.save(userDB);
      UtilCA.generarContrasenaAleatoria(8);
      console.log( userDB );
      return createUserDto;
    } catch (err) {
      ManejadorErrores.erroresDB( err, 'Auth' );
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
