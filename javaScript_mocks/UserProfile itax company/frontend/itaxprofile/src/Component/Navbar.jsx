import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" py={4} px={8} color="white">
      <Flex alignItems="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          ItaxEasy Profile Section
        </Heading>
        <Spacer />
        <Flex>
          <NavLink to="/" label="Form" />
          <NavLink to="/admin" label="Admin" />
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ to, label }) => (
  <Link
    as={RouterLink}
    to={to}
    color="white"
    px={4}
    py={2}
    borderRadius="md"
    _hover={{ textDecoration: "none", bg: "teal.600" }}
  >
    {label}
  </Link>
);

export default Navbar;
