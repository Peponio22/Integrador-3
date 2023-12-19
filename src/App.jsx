import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import ListaProductos from './components/productos/listaproductos'
import Registro from './components/registro/registro'
import Login from './components/login/login'


function App() {
  return (
  <div className='contenedor'>
  <Router>
      <Header/> 
       <Menu/>
      <Routes>
      <Route path="/productos" element={<ListaProductos/>}/>
      <Route path="/registro" element={<Registro/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
  </Router>
  <Footer/>
  </div>
  )
}

export default App
