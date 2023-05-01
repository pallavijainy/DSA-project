import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useToast();
  const handleSubmit = () => {
    const payload = { name, email };
    try {
      fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
            if(res.msg === "LOGIN SUCCESSFULLY"){
                toast({
                    title: 'LOGIN SUCCESSFULLY.',
                    description: "We've LOGIN SUCCESSFULLY for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })   

                  localStorage.setItem("token" , res.token)
            }
        })
        .catch((err) => {
            console.log(err)
            toast({
                title: 'fill all correct credentials.',
                description: "We've created your account for you.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        });
    } catch (error) {
      console.log(error)
      toast({
        title: 'fill all correct credentials.',
        description: "We've created your account for you.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <FormHelperText>Name should be 1 to 50 characters .</FormHelperText>
      <FormLabel>Email address</FormLabel>
      <Input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <FormHelperText>We'll never share your email.</FormHelperText>

      <Button onClick={handleSubmit}>submit</Button>
    </FormControl>
  );
};

export default Login;
