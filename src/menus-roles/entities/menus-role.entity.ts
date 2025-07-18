import { ManyToOne, PrimaryGeneratedColumn } from "typeorm";



export class MenusRole {

    //TODO: Implementar relaciones
    @PrimaryGeneratedColumn('uuid')
    id_menu_rol: string;

    
}
