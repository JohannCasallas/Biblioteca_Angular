import { ILibro } from "./ilibro";

export interface IAutor {
    idAutor: number;
    descripcion: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    libros: ILibro[];
}
