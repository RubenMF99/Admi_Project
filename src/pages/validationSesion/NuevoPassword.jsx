import { useState, useEffect } from "react";
import { Link, useParams  } from "react-router-dom";
import axiosClient from "../../config/axiosClient";
import Alerta from "../../components/Alerta";

const NuevoPassword = () => {
  const [errorForm, setError] = useState({});
  const [tokenValidate, setTokenValidate] = useState(true);
  const [password,setPassword] = useState('');
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const validateToken = async () => {
      try {
        const url = `/user/validation/${token}`;
        await axiosClient.get(url);
      } catch (error) {
        console.log(error.response);
        setTokenValidate(false);
      }
    };
    validateToken();
  }, []);

  const handleSubmitForm = async e =>{
    e.preventDefault();

    if(password === '' || password.length<6){ 
       setError({
         msg:"El password es Obligatorio",
         error:true
       });
       return;
    }
    peticion();
    setPassword('');
  }
 const {msg} = errorForm;

 const peticion = async()=>{
  try{
    const url = `/user/validation/${token}`;
    const {data} = await axiosClient.post(url,{password});
    setError({
     msg: data.msg,
     error:false
   });
   window.location.href= '/';
  }catch(error){
   setError({
     msg: error.response.data.msg,
     error:true
   });
  }
}
 
  return (
    <>
      {tokenValidate ? (
        <div>
          <h1 className="text-sky-600 font-black text-6xl capitalize">
            Reestablece tu password y no pierdas tus
            <span className="text-slate-700"> proyectos</span>
          </h1>
          <form
            className="my-10 br-white shadow rounded-lg p-10"
            onSubmit={handleSubmitForm}
          >
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password"
              >
                Nuevo Password
              </label>
              {msg && <Alerta alert={errorForm}/>}
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Escribe tu Nuevo Password"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="w-full mb-5 bg-sky-700 text-xl rounded py-3 text-white uppercase
                hover:cursor-pointer hover:bg-sky-800 transition-colors"
              value="Guardar"
            />
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-sky-600 font-black text-6xl capitalize">
            Token no Valido
          </h1>
          <Link
            className="my-5 mt-5 text-slate-500 block text-center text-sm"
            to="/recuperar-password"
          >
            Volver a reestablecer contraseña
          </Link>
        </div>
      )}
    </>
  );
};

export default NuevoPassword;
