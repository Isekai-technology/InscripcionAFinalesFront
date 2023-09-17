import { Usuario } from "./Usuario";

export interface Estudiante extends Usuario {
    carrera: string;
}