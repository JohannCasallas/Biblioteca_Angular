import { IPrestamo } from "./iprestamo";

export interface IEstadoPrestamo {
    idEstadoPrestamo: number;
    descripcion: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    prestamos: IPrestamo[];
}
