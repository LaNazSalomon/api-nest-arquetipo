import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cat_usuarios')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

    //! Esto es representativo unicamente pues aun no exsisten los roles como tal
    @Column( 'text' )
    id_rol: string;

    @Column( 'text' )
    nombres: string;

    @Column ( 'text' )
    apellido_paterno: string;

    @Column( 'text' )
    apellido_materno: string;

    @Column( 'text')
    username: string;

    // Es para que en consultas con findOneBy no nos devuelvan la contraseña
    @Column( 'text', {
        select: false
    } )
    password: string;

    @Column( 'bool', {
        nullable: false,
        default: true
    } )
    status: boolean;

    @Column( 'text', {
        unique: true
    } )
    email: string;

    @Column( 'text',{
        unique: true
    } )
    telefono: string;



    @Column( 'bool', {
        default: true
    })
    primer_inicio: boolean;

    //TODO: Falta la implementacion de los roles y su relacion con esta tabla

}