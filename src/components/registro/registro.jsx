import './registro.css';
function Registro(){
    return (
   <>
<section class="registro">
 <h1>Registro</h1>
<form action="" name='formulario-registro'>
    <div>
    <label htmlFor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" class="input-field"/>
    </div>
    <div>
    <label htmlFor="apellido">Apellido</label>
    <input type="text" id="apellido" name="apellido" class="input-field"/>
    </div>
    <div>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" class="input-field"/>
    </div>
    <div>
    <label htmlFor="telefono">Telefono</label>
    <input type="text" id="telefono" name="telefono" class="input-field"/>
    </div>
    <button type="submit" class="submit-button">Registrarse</button>
</form>
</section>
</>
)
}

export default Registro