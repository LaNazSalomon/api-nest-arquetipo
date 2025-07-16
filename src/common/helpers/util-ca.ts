import { Injectable } from '@nestjs/common';

import * as generatePassword from 'generate-password';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilCA {
  // Usando bcrypt (dependencia) generamos un hash unidireccional
  public static Encriptar(texto: string): string {
    const encript: string = bcrypt.hashSync(texto, 10);
    return encript;
  }

  public static obtenerHoraMexico(): string {
    const ahora = new Date();
    const horaMexico = ahora.toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    console.log(horaMexico);
    return horaMexico;
  }

  public static obtenerSoloFechaMexico(): string{
    const ahora = new Date();
    const horaMexico = ahora.toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
    });
    console.log(horaMexico);
    return horaMexico;
  }


  public static generarContrasenaAleatoria(longitud: number): string{
    const contrasena = generatePassword.generate({
      length: longitud,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true
    })

    const contrasenaEncriptada = this.encriptarContrasena( contrasena );
    return contrasenaEncriptada;
  }

  public static encriptarContrasena(contrasena: string): string{
    //? El numero que se pasa como segundo argumento es la complejidad de la contraseña, mientras mas alto
    //? mas compleja pero igual tardara mas en generarla
    return bcrypt.hashSync( contrasena, 10 );
  }


  //TODO: Faltan algunos metodos, de momentos solo se implementaran los mas "necesarios"
}
