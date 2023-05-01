import React from 'react'
import "./Home.css"
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  
  Heading,
  Box,
} from "@chakra-ui/react";
import Poster from "./Poster"
import { Link } from 'react-router-dom';
import Activity from './Activity';

const Home = () => {
    const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [parentname, setParentName] = useState("");

  const [phone, setPhone] = useState("");
  const [comment, setComments] = useState("");
  const [school, setSchool] = useState("");
  const [classes, setClass] = useState("");
  const [mobile, setMobile] = useState("");

  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or database here
    // You can also use a third-party library like Axios to handle the submission
    fetch("https://camp-4cc5.onrender.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        classes,
        school,
        parentname,
        phone,
        mobile,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // Display a success toast message
    toast({
      title: "Form submitted",
      description: "Thank you for submitting your query!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Reset the form fields
    setName("");
    setAge("");
    setParentName("");
    setSchool("");
    setClass("");
    setMobile("");

    setPhone("");
    setComments("");
  };
  return (
    <>
      <Poster/>

      <Activity/>

     
      <Box className='box' marginBottom={"20px"}>
         <Button> <Link to={"/"}>Form</Link></Button> 
         <Button><Link to={"/gallery"}>Some Glimpses Of Summer camp</Link></Button> 
      </Box>
      <form onSubmit={handleSubmit} className="my-form">
      <Heading textAlign={"center"}>Fill Form for More Details</Heading>
        <VStack spacing={4}>
          <FormControl >
            <FormLabel>Child's Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter the child's name"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel  >Child's Age</FormLabel>
            <Input
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              placeholder="Enter the child's age"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Class</FormLabel>
            <Input
              type="text"
              value={classes}
              onChange={(event) => setClass(event.target.value)}
              placeholder="Enter your class"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>School</FormLabel>
            <Input
              type="text"
              value={school}
              onChange={(event) => setSchool(event.target.value)}
              placeholder="Enter Your School Name"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Parent/Guardian Name</FormLabel>
            <Input
              type="text"
              value={parentname}
              onChange={(event) => setParentName(event.target.value)}
              placeholder="Enter the parent/guardian's name"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Additional Comments</FormLabel>
            <Textarea
              value={comment}
              onChange={(event) => setComments(event.target.value)}
              placeholder="Enter any additional comments"
            />
          </FormControl>
          <Button type="submit">Submit</Button>
        </VStack>
      </form>
    </>
  )
}

export default Home
