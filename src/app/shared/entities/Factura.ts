import { Producto } from './Producto';

export interface Factura{
  id: string;
 idCliente: string;
 descuentoFactura: number;
 productos: Producto[];
 fechaGenerada: string;
 totalFactura: number;

}
