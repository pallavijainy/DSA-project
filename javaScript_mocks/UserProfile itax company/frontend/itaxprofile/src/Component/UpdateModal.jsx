import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const UpdateModal = ({ id, data, handleUpdate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data);
  const toast = useToast();
  const [formData, setFormData] = useState({
    legal_name: data.legal_name,
    date_of_birth: data.date_of_birth,
    address: data.address,
    pincode: data.pincode,
    city: data.city,
    country: data.country,
    state: data.state,
    gst_number: data.gst_number,
    mobile_number: data.mobile_number,
    email: data.email,
    company_name: data.company_name,
    date_of_incorporation: data.date_of_incorporation,
    business_address: data.business_address,
    business_pincode: data.business_address,
    business_city: data.business_city,
    business_country: data.business_country,
    business_state: data.business_state,
    business_type: data.business_type,
    business_description: data.business_description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/user/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        toast({
          title: "User Profile Updated.",
          description: "Update Profile.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .then(() => {
        handleUpdate();
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <FormControl mt={4}>
                <FormLabel>Legal Name</FormLabel>
                <Input
                  type="text"
                  name="legal_name"
                  value={formData.legal_name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Pincode</FormLabel>
                <Input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Country</FormLabel>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>State</FormLabel>
                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>GST Number</FormLabel>
                <Input
                  type="text"
                  name="gst_number"
                  value={formData.gst_number}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="text"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Company Name</FormLabel>
                <Input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date of Incorporation</FormLabel>
                <Input
                  type="date"
                  name="date_of_incorporation"
                  value={formData.date_of_incorporation}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business Address</FormLabel>
                <Input
                  type="text"
                  name="business_address"
                  value={formData.business_address}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business Pincode</FormLabel>
                <Input
                  type="text"
                  name="business_pincode"
                  value={formData.business_pincode}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business City</FormLabel>
                <Input
                  type="text"
                  name="business_city"
                  value={formData.business_city}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business Country</FormLabel>
                <Input
                  type="text"
                  name="business_country"
                  value={formData.business_country}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business State</FormLabel>
                <Input
                  type="text"
                  name="business_state"
                  value={formData.business_state}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business Type</FormLabel>
                <Input
                  type="text"
                  name="business_type"
                  value={formData.business_type}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Business Description</FormLabel>
                <Textarea
                  name="business_description"
                  value={formData.business_description}
                  onChange={handleChange}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
