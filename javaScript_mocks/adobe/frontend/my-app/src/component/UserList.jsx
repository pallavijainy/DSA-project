import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const UserList = () => {
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetch("http://localhost:8000/allusers")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      <Heading>USERLIST</Heading>
      {data.map((el) => (
        <Box key={el._id}>
          <Heading>{el.name}</Heading>

          <Button onClick={onOpen}>View User</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>User Detail</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading>{el.name}</Heading>
                <Heading>{el.email}</Heading>
                <Heading>{el.bio}</Heading>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* <Button onClick={handleEdit}>Edit</Button> */}
          <Button onClick={() => handleDelete(el.id)}>Delete</Button>
        </Box>
      ))}
    </Box>
  );
};

export default UserList;
