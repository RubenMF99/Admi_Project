import {useState} from 'react'
import {Link} from 'react-router-dom';
import Alerta from '../../components/Alerta';
import axiosClient from "../../config/axiosClient";

const Registrar = () => {
    //state
    const [toAdduser,setoAdduser] = useState({
      name:"",
      email:"",
      password:""
    });
    const [repeatPassword,setrepeatPassword] = useState("");
    const [errorForm,setError] = useState({});
    const {name,email,password} = toAdduser;

    const handlechange = e => {
        setoAdduser({
          ...toAdduser,
          [e.target.name]:e.target.value
        });
    }

    const handleSubmitForm = e =>{
      e.preventDefault();
        if([name,email,password,repeatPassword].includes('')){
          setError({
            msg:"Todos los campos son obligatorios",
            error:true
          });
          return;
        }
        if(password !== repeatPassword) {
          setError({
            msg:"Los password no coinciden",
            error:true
          });
          return;
        }
        if(password.length <6) {
          setError({
            msg:"Los password es muy corto, ingresa uno mas largo",
            error:true
          });
          return;
        }
        setError({});
        registrarUser();
        setrepeatPassword("");
        setoAdduser({
          name:"",
          email:"",
          password:""
        });
        

    }
    const registrarUser = async ()=> {
        try{
            const {data} = await axiosClient.post(`/user`,toAdduser);
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
    <h1 className="text-sky-600 font-black text-6xl capitalize">Registarte y Administra tus
    <span className="text-slate-700"> proyectos</span></h1> 
    {msg && <Alerta alert={errorForm}/>}
    <form
     className="my-10 br-white shadow rounded-lg p-10"
      onSubmit={handleSubmitForm}
    >
      <div className="my-5">
      <label
          className="uppercase text-gray-600 block text-xl font-bold"
         >Nombre</label>
         <input
           type="text"
           placeholder="Email de Registro"
           name="name"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           value={name}
           onChange={handlechange}
         />
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
           onChange={handlechange}
         />
         <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
         >Password</label>
         <input
           type="password"
           id="password"
           name="password"
           value={password}
           placeholder="Password"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           onChange={handlechange}
         />
         <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
         >Repite Password</label>
         <input
           type="password"
           id="password"
           placeholder="Password"
           value={repeatPassword}
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
           onChange={ e => setrepeatPassword(e.target.value)}
         />
     </div>
     <input
           type="submit"
           className="w-full mb-5 bg-sky-700 text-xl rounded py-3 text-white uppercase
            hover:cursor-pointer hover:bg-sky-800 transition-colors"
           value="Crear cuenta"
         />
   </form>
   <nav className="lg:flex lg:justify-between">
     <Link className="my-5 text-slate-500 block text-center text-sm" 
     to="/">¿Ya tienes una cuenta?  Inicia sesion</Link>
     <Link className="my-5 text-slate-500 block text-center text-sm" 
     to="/recuperar-password">Olvide mi password</Link>
   </nav>
   </>
  )
}

export default Registrar