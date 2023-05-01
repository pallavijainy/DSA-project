import React from 'react'
import {Box, Select} from "@chakra-ui/react"
import "./Navbar.css";
import {AttachmentIcon, BellIcon} from "@chakra-ui/icons";

const Navbar = () => {
  return (
   <>
   <Box id='main'>
    <Box id='seprate'>
        <img src="" alt="logo" />
    </Box>
    <Box id='first'>
        <Box>
        <Select placeholder=' ➕ Select your product'  bg='gray'
  borderColor='gray'
  color='white'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
        </Box>
  <Box>
  <AttachmentIcon/>
 
  <BellIcon/>
  </Box>
    </Box>
    <Box id='second'></Box>

   </Box>
   </>
  )
}

export default Navbar
