import {Link} from 'react-router-dom';


const Login = () => {
  return (
    <>
     <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y Administra tus
     <span className="text-slate-700"> proyectos</span></h1> 
     <form className="my-10 br-white shadow rounded-lg p-10">
       <div className="my-5">
          <label
           className="uppercase text-gray-600 block text-xl font-bold"
           htmlFor="email"
          >Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
          <label
           className="uppercase text-gray-600 block text-xl font-bold"
           htmlFor="password"
          >Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
      </div>
      <input
            type="submit"
            className="w-full mb-5 bg-sky-700 text-xl rounded py-3 text-white uppercase
             hover:cursor-pointer hover:bg-sky-800 transition-colors"
            value="Iniciar sesion"
          />
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link className="my-5 text-slate-500 block text-center text-sm" 
      to="/registrar">¿No tienes una cuenta?  Registrate</Link>
      <Link className="my-5 text-slate-500 block text-center text-sm" 
      to="/recuperar-password">Olvide mi password</Link>
    </nav>
    </>
  )
}

export default Login