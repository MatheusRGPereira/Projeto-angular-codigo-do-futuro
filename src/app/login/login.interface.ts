import { Usuario } from "../shared/interfaces/Usuario.interface";

export interface LoginResponse {
    usuario: Usuario;
    token: string;
}