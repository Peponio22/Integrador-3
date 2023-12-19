import './login.css';
function Login(){
    return (
  <>
<section className="login">
<h1>Login</h1>
<form action="" name='formulario-login'>
    <div>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" className="login-input"/>
    </div>
    <div>
    <label htmlFor="contrasena">Contrasena</label>
    <input type="text" id="contrasena" name="contrasena" className="login-input"/>
    </div>
    <button type="submit" className="submit-button">Entrar con la cuenta</button>
</form>
</section>
</>
)
}

export default Login