import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      w="100%"
      borderBottom={"1px solid teal"}
      h="75px"
      justifyContent={"space-around"}
      alignItems={"center"}
      position={"sticky"}
      top="0%"
      zIndex={20}
      bg="white"
    >
      <Link to="/">
        <Button variant={"link"} fontFamily={"cursive"}>
          ITaxEasy
        </Button>
      </Link>
      <Flex w={["60%", "50%", "30%"]} justifyContent={"space-around"}>
        <Link to="/">
          <Button
            fontSize={["10px", "10px", "15px"]}
            variant={"link"}
            fontFamily={"cursive"}
          >
            INCOME TAX CALCULATOR
          </Button>
        </Link>
        <Link to="/hra">
          <Button
            variant={"link"}
            fontFamily={"cursive"}
            fontSize={["10px", "10px", "15px"]}
          >
            HRA CALCULATOR
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
