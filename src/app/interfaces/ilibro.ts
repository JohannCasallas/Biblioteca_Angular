import { IAutor } from "./iautor";
import { ICategoria } from "./icategoria";
import { IEditorial } from "./ieditorial";
import { IPrestamo } from "./iprestamo";

export interface ILibro {
    idLibro: number;
  titulo: string | null;
  rutaPortada: string | null;
  nombrePortada: string | null;
  idAutor: number | null;
  idCategoria: number | null;
  idEditorial: number | null;
  ubicacion: string | null;
  ejemplares: number | null;
  estado: boolean | null;
  fechaCreacion: Date | null;
  idAutorNavigation: IAutor | null;
  idCategoriaNavigation: ICategoria | null;
  idEditorialNavigation: IEditorial | null;
  prestamos: IPrestamo[];
}
