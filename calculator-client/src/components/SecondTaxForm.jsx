import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiArrowGoBackFill } from "react-icons/ri";
function TaxResultForm({ data, setData, next }) {
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Box
      as={motion.div}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      maxWidth="400px"
      mx="auto"
      py={4}
      border="1px solid"
      pos="relative"
      padding={"2%"}
    >
      <Button
        position={"absolute"}
        top="1%"
        right={"10%"}
        onClick={() => next(false)}
      >
        <RiArrowGoBackFill />
      </Button>
      <FormControl mb={4}>
        <FormLabel>Income Tax</FormLabel>
        <Input
          type="number"
          placeholder="Income Tax"
          name="incomeTax"
          value={data.incomeTax}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Surcharge</FormLabel>
        <Input
          type="number"
          placeholder="Surcharge"
          name="surcharge"
          value={data.surcharge}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Education Cess</FormLabel>
        <Input
          type="number"
          placeholder="Education Cess"
          name="healthAndEducationCess"
          value={data.healthAndEducationCess}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Total Tax Liability</FormLabel>
        <Input
          type="number"
          placeholder="Total Tax Liability"
          name="totalTaxLiability"
          value={data.totalTaxLiability}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Relief</FormLabel>
        <Input type="number" placeholder="Relief" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>TDS/TCS/MAT (AMT) Credit Utilized</FormLabel>
        <Input type="number" placeholder="TDS/TCS/MAT (AMT) Credit Utilized" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Assessed Tax</FormLabel>
        <Input type="number" placeholder="Assessed Tax" />
      </FormControl>

      <Button colorScheme="blue" mt={4} width={"full"}>
        Next
      </Button>
    </Box>
  );
}

export default TaxResultForm;
