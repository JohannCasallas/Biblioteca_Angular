import { IEstadoPrestamo } from "./iestado-prestamo";
import { ILibro } from "./ilibro";
import { IPersona } from "./ipersona";

export interface IPrestamo {
    idPrestamo: number;
    idEstadoPrestamo: number | null;
    idPersona: number | null;
    idLibro: number | null;
    fechaDevolucion: Date | null;
    fechaConfirmacionDevolucion: Date | null;
    estadoEntregado: string | null;
    estadoRecibido: string | null;
    estado: boolean | null;
    fechaCreacion: Date | null;
    idEstadoPrestamoNavigation: IEstadoPrestamo | null;
    idLibroNavigation: ILibro | null;
    idPersonaNavigation: IPersona | null;
}
