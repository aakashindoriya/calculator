import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import HouseRentAllowance from "../components/HraForm";

export default function Hra() {
  return (
    <Box p="2%" maxW="99vw" bg="teal.100" minH={"100vh"}>
      <Text>(As amended upto Finance Act, 2023)</Text>
      <Heading m="1%">HOUSE RENT ALLOWANCE</Heading>
      <HouseRentAllowance />
    </Box>
  );
}
