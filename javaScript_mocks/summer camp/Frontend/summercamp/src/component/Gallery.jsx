import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
<>
<Box  margin={"20px"} display="flex" justifyContent={"space-around"}>
    <Button> <Link to={"/"}>Form</Link></Button> 
    <Button><Link to={"/gallery"}>Some Glimpses Of Summer camp</Link></Button> 
 </Box>
    <div >
      <video controls>
        <source src={`${process.env.PUBLIC_URL}VID-20220615-WA0006.mp4`} type="video/mp4" />
      </video>
    </div>

</>
   
  )
}

export default Gallery