/*
*   En esta clase estamos manejando excepciones que pueden pasar como la duplicidad de algun valor indexado
*   En caso de no tener el error controlado, se enviara un log a la terminal de la api para poder ver mas a
*   detalle que es lo que paso, tambien indicando donde es que trono (en que clase)
*/


import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';


@Injectable()
export class ManejadorErrores {
  public static erroresDB(error: any, nameClass: string): never {
    const logger: Logger = new Logger(nameClass);

    if (error.code === '23505') throw new BadRequestException(error.detail);

    if (error.code === '23503') throw new BadRequestException(error.detail);

    logger.error(error);
    throw new InternalServerErrorException(
      'Error inesperado, por favor revise los logs del server',
    );
  }
}
