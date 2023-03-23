import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div>
      <Button><Link to={"/admin"}>Admin Page</Link></Button>  
       <Button><Link to={"/user"}>User Page</Link></Button> 
    </div>
  )
}

export default HomePage