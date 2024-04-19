import { ILibro } from "./ilibro";

export interface ICategoria {
    idCategoria: number;
    descripcion: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    libros: ILibro[];
}
