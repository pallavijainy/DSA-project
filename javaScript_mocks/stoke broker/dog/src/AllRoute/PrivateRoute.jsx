import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {

const {isAuth}= useSelector((store)=>store)

// console.log(isAuth)

if(!isAuth){
  return <Navigate to={"/admin"}/>
}
  return children
}

export default PrivateRoute
