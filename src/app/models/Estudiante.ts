import { MesaExamen } from "./MesaExamen";
import { Usuario } from "./Usuario";

export interface Estudiante {
    id: number;
    usuario: Usuario;
    nombre: string;    
    apellido: string;
    dni: string;
    carrera: string;
    curso: string;
    plan: number;
    mesasInscriptas: MesaExamen[];
}