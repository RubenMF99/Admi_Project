import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Alerta from '../components/Alerta';
const OlvidePassword = () => {

  const [email,setEmail] = useState('');
  const [errorForm,setError] = useState({});

  const handleSubmitForm = async e =>{
     e.preventDefault();

     if(email === ''){ 
        setError({
          msg:"El email es Obligatorio",
          error:true
        });
        return;
     }
     try{
       const url = `${import.meta.env.VITE_RUTA}/user/recoverpassword`;
       const {data} = await axios.post(url,{email});
       setError({
        msg: data.msg,
        error:false
      });
     }catch(error){
      setError({
        msg: error.response.data.msg,
        error:true
      });
     }
  }

  const {msg} = errorForm;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso y no pierdas tus 
      <span className="text-slate-700"> proyectos</span></h1> 
      <form
      className="my-10 br-white shadow rounded-lg p-10"
        onSubmit={handleSubmitForm}
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email de Registro"
            name="email"
            value={email}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={e => setEmail(e.target.value)}
          />
      </div>
      {msg && <Alerta alert={errorForm}/>}
      <input
            type="submit"
            className="w-full mb-5 bg-sky-700 text-xl rounded py-3 text-white uppercase
              hover:cursor-pointer hover:bg-sky-800 transition-colors"
            value="Enviar Instrucciones"
          />
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link className="my-5 text-slate-500 block text-center text-sm" 
      to="/">¿Ya tienes una cuenta?  Inicia sesion</Link>
      <Link className="my-5 text-slate-500 block text-center text-sm" 
      to="/registrar">¿No tienes una cuenta?  Registrate</Link>
    </nav>
   </>
  )
}

export default OlvidePassword