import { User } from "src/auth/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity( 'cat_roles' )
export class Role {
 
    @PrimaryGeneratedColumn('uuid')
    id_rol: string;

    @Column( 'text' )
    nombre: string;

    @Column( 'text' )
    descripcion: string;

    @Column( 'bool' )
    status: boolean;


    //* Conexion con los usuarios

    //*Cascade actualizacion, eliminacion o creacion, se elimina a todo lo relacionado
    //* eager al hacer una consulta de roles se cargan de manera automatica los usuarios
    @OneToMany(
        () => User,
        ( user ) => user.id_rol,
        {
            cascade: true,
            eager: true

        }
    )
    usuarios: User[];
    

    //TODO: Implementacion de la lista de usuarios y la lista de menus asociados con esta entidad
}
