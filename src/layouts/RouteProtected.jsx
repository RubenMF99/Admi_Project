import {Outlet, Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'


const RouteProtected = () => {
    const {authUser} = useAuth();
    console.log("DATA:", authUser.user._id);
  return (
            <>
             {authUser?.user?._id? "Autorizado": <Navigate to = "/"/>}
            </> 
  )
}

export default RouteProtected