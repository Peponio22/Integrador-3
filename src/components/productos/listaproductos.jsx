import Productos from './productos';
import productos from './productosDatos';

function ListaProductos(){
    return(
        <div>
        {productos.map((producto, index) => (
            <Productos
                key={index}
                nombre={producto.nombre}
                precio={producto.precio}
                stock={producto.stock}
                codigo={producto.codigo}
            />
            ))}
        </div>
    )
}
export default ListaProductos;