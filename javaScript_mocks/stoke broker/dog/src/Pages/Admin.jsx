import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormControl, FormHelperText, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { login_success } from '../Redux/Action';


const Admin = () => {
  
  const {token} = useSelector((store)=>store)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const dispatch = useDispatch()
  const toast = useToast()
 
  const handleClick = () => {

    let obj ={email,password}
    dispatch(login_success(obj))
   if(token.length>0){
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
   }else{
    toast({
      title: 'error.',
      description: "We've created your account for you.",
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
   }

    
    
    
  }

  return (
    <div>
      
      <Heading>Admin Page</Heading>
      <Button><Link to={"/admin"}>Login Page</Link></Button>  
      <Button><Link to={"/data"}>Data Page</Link></Button>  
      <Button><Link to={"/report"}>Report Page</Link></Button> 
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleClick}>Login</Button>
      </FormControl>
    </div>
  )
}

export default Admin
