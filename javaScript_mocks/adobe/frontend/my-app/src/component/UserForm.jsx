import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const toast = useToast();
  const navigate = useNavigate()
  const handleSubmit = () => {
    const payload = { name, email, bio };
    try {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          console.log(res);
          return res.text();
        })
        .then((res) => {
          console.log(res);
          if (res == "user created") {
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            navigate("/login")
          } else {
            toast({
              title: "Failed Account created.",
              description: "Something went wrong.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        });
    } catch (error) {
      console.log(error);
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
      <FormLabel>bio</FormLabel>
      <Input type="text" onChange={(e) => setBio(e.target.value)} value={bio} />
      <FormHelperText>bio should be 0 to 200 characters .</FormHelperText>
      <Button onClick={handleSubmit}>submit</Button>
    </FormControl>
  );
};

export default UserForm;
