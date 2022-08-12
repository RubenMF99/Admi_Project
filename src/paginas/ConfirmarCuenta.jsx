import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosClient from "../config/axiosClient";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const params = useParams();
  const { id } = params;
  const [errorConf, setError] = useState({});
  const [confirnCuenta, setConfirn] = useState(false);
  useEffect(() => {
    const confirmation = async () => {
      try {
        const url = `/user/confirmar/${id}`;
        const { data } = await axiosClient.get(url);
        setError({
          msg: data.msg,
          error: false,
        });
        setConfirn(true);
      } catch (error) {
        setError({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmation();
  }, []);

  const { msg } = errorConf;
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Confirma tu cuenta y crea tus
        <span className="text-slate-700"> proyectos</span>
      </h1>
      <div className="mt-10 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alert={errorConf} />}
        {confirnCuenta && (
          <Link
            className="my-5 text-slate-500 block text-center text-sm"
            to="/"
          >
            {" "}
            Inicia sesion
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
