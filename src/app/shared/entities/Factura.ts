export interface Factura{
  id: string;
 idCliente: string;
 descuentoFactura: number;
 productos: {
  nombreProducto: string;
  cantidad: number;
  valorUnitario: number;
 }[];
 fechaGenerada: string;
 totalFactura: number;

}
