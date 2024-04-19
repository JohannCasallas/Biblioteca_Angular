import { ILibro } from "./ilibro";

export interface IEditorial {
    idEditorial: number;
    descripcion: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    libros: ILibro[];
}
