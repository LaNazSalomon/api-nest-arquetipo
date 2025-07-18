import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity( 'cat_menus' )
export class Menu {

    @PrimaryGeneratedColumn('uuid')
    id_menu: string;

    @Column( 'text',{
        unique: true
    })
    nombre: string;

    @Column( 'bool' )
    status: boolean;


    //TODO: Falta la implementacion de las relaciones

}
