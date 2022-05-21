
const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">Reestablece tu password y no pierdas tus 
      <span className="text-slate-700"> proyectos</span></h1> 
      <form
      className="my-10 br-white shadow rounded-lg p-10"
       // onSubmit={handleSubmitForm}
      >
        <div className="my-5">
        <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
         >Nuevo Password</label>
         <input
           type="password"
           id="password"
           name="password"
          // value={password}
           placeholder="Escribe tu Nuevo Password"
           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          // onChange={handlechange}
         />
      </div>
      <input
            type="submit"
            className="w-full mb-5 bg-sky-700 text-xl rounded py-3 text-white uppercase
              hover:cursor-pointer hover:bg-sky-800 transition-colors"
            value="Guardar"
          />
    </form>
    </>
  )
}

export default NuevoPassword