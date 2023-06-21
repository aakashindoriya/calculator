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
  let AssessedTax =
    Number(data.incomeTax) +
    Number(data.surcharge) +
    Number(data.healthAndEducationCess) -
    Number(data.relief) -
    Number(data.tds);
  return (
    <Box
      as={motion.div}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      maxWidth={["400px", "600px"]}
      mx="auto"
      py={4}
      pos="relative"
      padding={"2%"}
      boxShadow={"inner"}
      bg="white"
      borderRadius={"20px"}
    >
      <Button
        position={"absolute"}
        top="1%"
        right={"10%"}
        zIndex={10}
        onClick={() => next(false)}
        variant={"outline"}
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
          variant="filled"
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
          variant="filled"
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
          variant="filled"
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
          variant="filled"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Relief</FormLabel>
        <Input
          type="number"
          placeholder="Relief"
          name="relief"
          value={data.relief}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>TDS/TCS/MAT (AMT) Credit Utilized</FormLabel>
        <Input
          type="number"
          placeholder="TDS/TCS/MAT (AMT) Credit Utilized"
          name="tds"
          value={data.tds}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Assessed Tax</FormLabel>
        <Input
          type="number"
          placeholder="Assessed Tax"
          variant="filled"
          value={AssessedTax}
        />
      </FormControl>

      <Button colorScheme="blue" mt={4} width={"full"}>
        Claculate
      </Button>
    </Box>
  );
}

export default TaxResultForm;
