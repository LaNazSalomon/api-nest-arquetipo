import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UtilCA } from 'src/common/helpers/util-ca';
import { ManejadorErrores } from 'src/common/exceptions/ManejadorErrores';
import { PaginationDto } from '../common/dto/pagination.dto';


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
      console.log(userDB);
      return createUserDto;
    } catch (err) {
      ManejadorErrores.erroresDB(err, 'Auth');
    }
  }

  async findAllUsers(paginationDto: PaginationDto) {
    //En caso de que no nos manden la paginacion se devuelve
    const { limit, offset } = paginationDto;

    const users = await this.userRepository.find({
      take: limit,
      skip: offset,
      relations: {
        id_rol: true
      }
    });

    //Vamos a desestructurar la data para poder mandar solo el rol no el ID, la descripcio ni el status

    return users.map( ({id_rol, ...usuario}) => ({
      ...usuario,
      rol: id_rol.nombre
    }
  ));
  }

  async findUsersByTerm(term: string) {
    let users: User[] | null;
    //A comprobar si lo que nos mandan es un uuid, si no pues a buscar por cualquier cosa que manden
    // Vamos a regresar todo menos la contraseña, aunque no hay problema porque esa por defecto no la regresa
    const queryBuilder = this.userRepository.createQueryBuilder('cat_usuarios');

    //nombres, rol o username
    //TODO: Ajustar esta consulta cuando las relaciones esten listas
    users = await queryBuilder
      .where('nombres ILIKE :term or username ILIKE :term or id_rol ILIKE :term or apellido_paterno ILIKE :term or apellido_materno ILIKE :term', {
        term: `%${term}%`,
      })
      .getMany();

    console.log(term);

    if (!users) throw new NotFoundException('No se encontro ningun usuario');
    return users;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
