import { IPrestamo } from "./iprestamo";
import { ITipoPersona } from "./itipo-persona";

export interface IPersona {
    idPersona: number;
    nombre: string | null;
    apellido: string | null;
    correo: string | null;
    clave: string | null;
    codigo: string | null;
    idTipoPersona: number | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    idTipoPersonaNavigation: ITipoPersona | null;
    prestamos: IPrestamo[];
}
