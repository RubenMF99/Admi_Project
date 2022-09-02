import {BrowserRouter,Routes,Route}  from 'react-router-dom'

//Components
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/sesion/Login';
import Registrar from './pages/sesion/Registrar';
import OlvidePassword from './pages/validationSesion/OlvidePassword';
import NuevoPassword from './pages/validationSesion/NuevoPassword';
import ConfirmarCuenta from './pages/validationSesion/ConfirmarCuenta';
import {AuthProvider} from './context/AuthProvider';
import RouteProtected from './layouts/RouteProtected';
import Projects from './pages/projects/Projects';
function App() {
 
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>} />
                <Route path="/registrar" element={<Registrar/>} />
                <Route path="/recuperar-password" element={<OlvidePassword/>} />
                <Route path="/recuperar-password/:token" element={<NuevoPassword/>} />
                <Route path="/confirmar-cuenta/:id" element={<ConfirmarCuenta/>} />
            </Route>
            <Route path='/proyectos' element={<RouteProtected/>}>
                  <Route index element = {<Projects/>}/>
            </Route>
        </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
