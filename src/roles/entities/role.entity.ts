import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    //TODO: Implementacion de la lista de usuarios y la lista de menus asociados con esta entidad
}
