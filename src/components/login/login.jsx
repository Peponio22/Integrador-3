import './login.css';
function Login(){
    return (
  <>
<section class="login">
<h1>Login</h1>
<form action="" name='formulario-login'>
    <div>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" name="email" class="login-input"/>
    </div>
    <div>
    <label htmlFor="contrasena">Contrasena</label>
    <input type="text" id="contrasena" name="contrasena" class="login-input"/>
    </div>
    <button type="submit" class="submit-button">Entrar con la cuenta</button>
</form>
</section>
</>
)
}

export default Login