import './registro.css';
function Registro(){
    return (
   <>
<section className="registro">
 <h1>Registro</h1>
<form action="" name='formulario-registro'>
    <div>
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" className="input-field"/>
    </div>
    <div>
    <label htmlFor="apellido">Apellido</label>
    <input type="text" id="apellido" name="apellido" className="input-field"/>
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" className="input-field"/>
    </div>
    <div>
    <label htmlFor="telefono">Telefono</label>
    <input type="text" id="telefono" name="telefono" className="input-field"/>
    </div>
    <button type="submit" className="submit-button">Registrarse</button>
</form>
</section>
</>
)
}

export default Registro