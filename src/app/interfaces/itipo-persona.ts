import { IPersona } from "./ipersona";

export interface ITipoPersona {
    idTipoPersona: number;
    descripcion: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    personas: IPersona[];
}
