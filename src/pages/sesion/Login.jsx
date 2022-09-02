import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axiosClient from '../../config/axiosClient';
import Alerta from '../../components/Alerta';
import useAuth from '../../hooks/useAuth';

const Login = () => {

  const [user,setUser] = useState({
    email:'',
    password:''
  });
  
  const {setAuthUser} = useAuth();
   
  const [errorForm,setError] = useState({});
  const {email,password} =  user;

  const handlechange = e =>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }

  const handleSubmitForm  =  e =>{
    e.preventDefault();
    if ([email,password].includes('')){
      setError({
        msg: "Todos los campos son obligatorios",
        error:true
      });
      return;
    }
      loginUser();
    setUser({
      email:'',
      password:''
    })
  }

  const loginUser = async () =>{
        try {
           const {data} = await axiosClient.post('/user/login',user);
           localStorage.setItem('token',data.token)
           setAuthUser(data);
            setError({})
        } catch (error) {
          setError({
            msg: error.response.data.msg,
            error:true
          });
        }
  }
  const {msg} = errorForm;
  return (
    <>
     <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y Administra tus
     <span className="text-slate-700"> proyectos</span></h1> 
     <form 
            className="my-10 br-white shadow rounded-lg p-10"
            onSubmit={handleSubmitForm}
     >
       <div className="my-5">
       {msg && <Alerta alert={errorForm}/>}
          <label
           className="uppercase text-gray-600 block text-xl font-bold"
           htmlFor="email"
          >Email</label>
          <input
            type="email"
            id="email"
            name='email'
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={handlechange}
            value = {email}
          />
          <label
           className="uppercase text-gray-600 block text-xl font-bold"
           htmlFor="password"
          >Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name='password'
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            onChange={handlechange}
            value = {password}
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