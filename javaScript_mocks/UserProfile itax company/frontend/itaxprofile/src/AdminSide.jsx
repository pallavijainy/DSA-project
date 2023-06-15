import axios from "axios";
import { Box, Text, Stack, Divider, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UpdateModal from "./Component/UpdateModal";

const AdminSide = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    let response = axios.get("http://localhost:8000/user");
    return response;
  };

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/user/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        getData().then((res) => {
          setData(res.data);
        });
      });
  };
  const handleUpdate = () => {
    getData().then((res) => {
      setData(res.data);
    });
  };

  return (
    <Stack spacing={4}>
      {data?.map((el, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="md"
          p={4}
          boxShadow="md"
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            User Information
          </Text>
          <Divider mb={4} />
          <Stack spacing={2}>
            <InfoItem label="Legal Name" value={el.legal_name} />
            <InfoItem label="Date of Birth" value={el.date_of_birth} />
            <InfoItem label="Address" value={el.address} />
            <InfoItem label="Pincode" value={el.pincode} />
            <InfoItem label="City" value={el.city} />
            <InfoItem label="Country" value={el.country} />
            <InfoItem label="State" value={el.state} />
            <InfoItem label="GST Number" value={el.gst_number} />
            <InfoItem label="Mobile Number" value={el.mobile_number} />
            <InfoItem label="Email" value={el.email} />
            <InfoItem label="Company Name" value={el.company_name} />
            <InfoItem
              label="Date of Incorporation"
              value={el.date_of_incorporation}
            />
            <InfoItem label="Business Address" value={el.business_address} />
            <InfoItem label="Business Pincode" value={el.business_pincode} />
            <InfoItem label="Business City" value={el.business_city} />
            <InfoItem label="Business Country" value={el.business_country} />
            <InfoItem label="Business State" value={el.business_state} />
            <InfoItem label="Business Type" value={el.business_type} />
            <InfoItem
              label="Business Description"
              value={el.business_description}
            />
          </Stack>
          <Button colorScheme={"red"} onClick={() => handleDelete(el._id)}>
            Delete this User Profile
          </Button>
          <UpdateModal id={el._id} data={el} handleUpdate={handleUpdate} />
        </Box>
      ))}
    </Stack>
  );
};

const InfoItem = ({ label, value }) => (
  <Stack direction="row">
    <Text fontWeight="bold">{label}:</Text>
    <Text>{value}</Text>
  </Stack>
);

export default AdminSide;
