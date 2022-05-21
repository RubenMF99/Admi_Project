import {BrowserRouter,Routes,Route}  from 'react-router-dom'

//Components
import AuthLayout from './layouts/AuthLayout'
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<Login/>} />
                <Route path="/registrar" element={<Registrar/>} />
                <Route path="/recuperar-password" element={<OlvidePassword/>} />
                <Route path="/recuperar-password/:token" element={<NuevoPassword/>} />
                <Route path="/confirmar-cuenta/:id" element={<ConfirmarCuenta/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
