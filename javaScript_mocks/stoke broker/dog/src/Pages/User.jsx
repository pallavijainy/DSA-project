
import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addData } from '../Redux/Action';

const User = () => {
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [place,setPlace] = useState("");

    const dispatch = useDispatch()


    const handleSubmit=()=>{
       dispatch(addData({name,age,gender,place}))
       alert("data added successfully")
    }
  return (
  <>
<Heading>Registration form</Heading>

<FormControl isRequired>
  <FormLabel> name</FormLabel>
  <Input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
  <FormLabel> age</FormLabel>
  <Input placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
  <FormLabel> gender</FormLabel>
  <Input placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
  <FormLabel>place</FormLabel>
  <Input placeholder='place' value={place} onChange={(e)=>setPlace(e.target.value)}/>
  <Button id='submit' onClick={handleSubmit}>Submit</Button>
</FormControl>
  
  </>
  )
}

export default User