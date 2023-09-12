export class Usuario {
    nombre: string;
    email: string;
    rol: number;

    constructor (nom: string, em: string, r: number){
        this.nombre= nom;
        this.email= em;
        this.rol= r;
    }
}