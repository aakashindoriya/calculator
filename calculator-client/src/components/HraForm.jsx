import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const init = {
  salary: 0,
  da: 0,
  commission: 0,
  recivedHRA: 0,
  isMetro: false,
  rentPaid: 0,
  exemptedHra: 0,
  taxableHra: 0,
};
export const HouseRentAllowance = () => {
  const [data, setData] = useState(init);
  const calculateHra = () => {
    let { salary, da, commission, recivedHRA, isMetro } = data;
    console.log(salary, da, commission, recivedHRA, isMetro);
    const hraBasic = 0.5 * (salary + da);
    const hraActual = recivedHRA - 0.1 * (salary + da);
    const hra40 = 0.4 * (salary + da);

    const calculatedExemptedHra = Math.min(hraActual, hraBasic, hra40);
    let commissionHra = (commission / 100) * (salary + da);

    if (isMetro) {
      commissionHra = Math.min(commissionHra, 0.5 * (salary + da));
    } else {
      commissionHra = Math.min(commissionHra, 0.4 * (salary + da));
    }

    const totalExemptedHra = calculatedExemptedHra + commissionHra;
    const finalExemptedHra = totalExemptedHra >= 0 ? totalExemptedHra : 0;

    console.log(finalExemptedHra, recivedHRA - finalExemptedHra);
    setData({
      ...data,
      exemptedHra: finalExemptedHra,
      taxableHra: recivedHRA - finalExemptedHra,
    });
  };
  function handleChange(e) {
    let value = parseFloat(e.target.value);
    if (e.target.name == "isMetro") {
      value = e.target.checked;
    }
    setData({ ...data, [e.target.name]: value });
  }

  return (
    <Box
      maxWidth={["400px", "600px"]}
      padding={"2%"}
      mx="auto"
      py={4}
      as={motion.div}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      boxShadow={"inner"}
      bg="white"
      borderRadius={"20px"}
    >
      <FormControl mb={4}>
        <FormLabel>Basic Salary</FormLabel>
        <Input
          type="number"
          name="salary"
          value={data.salary}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>DA forming part of salary</FormLabel>
        <Input
          type="number"
          name="da"
          value={data.da}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Commission (% of turnover)</FormLabel>
        <Input
          type="number"
          name="commission"
          value={data.commission}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>HRA Received</FormLabel>
        <Input
          type="number"
          name="recivedHRA"
          value={data.recivedHRA}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Rent Paid</FormLabel>
        <Input
          type="number"
          name="rentPaid"
          value={data.rentPaid}
          onChange={handleChange}
        />
        <Checkbox
          mb={4}
          size={"lg"}
          name="isMetro"
          checked={data.isMetro}
          onChange={handleChange}
        >
          Metro City
        </Checkbox>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Exempted House Rent Allowance</FormLabel>
        <Input
          type="number"
          name="exemptedHra"
          value={data.exemptedHra}
          variant={"filled"}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Taxable House Rent Allowance</FormLabel>
        <Input
          type="number"
          name="taxableHra"
          value={data.taxableHra}
          variant={"filled"}
        />
      </FormControl>

      <Flex width={"100%"} gap="2">
        <Button colorScheme="blue" w="full" onClick={calculateHra}>
          Calculate
        </Button>

        <Button w="full" colorScheme="blue" onClick={() => setData(init)}>
          Reset
        </Button>
      </Flex>
    </Box>
  );
};

export default HouseRentAllowance;
