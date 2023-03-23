import { Button, Card, CardBody, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFun, getData } from './../Redux/Action';

const Data = () => {

  const {loading,error,data} = useSelector((store)=>store) 
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    dispatch(getData())
    
    console.log(data)
},[dispatch])

if(loading){
  return <h1>..........loading</h1>
}
if(error){
  return <h1>.......error</h1>
}

  return (
    <div>
      {
        data.map((el)=>(
          <Card key={el.id}>
  <CardBody >
   <Heading>{el.name}</Heading>
   <Heading>{el.age}</Heading>
   <Heading>{el.place}</Heading>
   <Heading>{el.gender}</Heading>
   <Button onClick={()=>dispatch(deleteFun(el.id))}>Delete</Button>
   <Button>Edit</Button>
  </CardBody>
</Card>
        ))
      }
    </div>
  )
}

export default Data
