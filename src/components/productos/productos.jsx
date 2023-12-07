import PropTypes from "prop-types";
import './productos.css';


function Productos(props){
    return(
        <section className="seccion-productos">
        <h2> {props.nombre}</h2>
        <p> {props.precio}</p>
        <p> {props.stock}</p>
        <p> {props.codigo}</p>
        </section>
    )
}

Productos.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.string,
    stock: PropTypes.string,
    codigo: PropTypes.string,
};


export default Productos;