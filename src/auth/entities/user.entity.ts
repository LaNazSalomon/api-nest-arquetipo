import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cat_usuarios')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

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

    //!Esto no esta bien definido del todo puesto que no es el ID, es todo el obj
    //*Conexion con el rol
    @ManyToOne(
        () => Role,
        ( rol ) => rol.usuarios,
        {
            onDelete: 'CASCADE'
        }
    )
    @JoinColumn( { name: 'id_rol' } )
    id_rol: Role;

    //TODO: Falta la implementacion de los roles y su relacion con esta tabla

}