import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

import {
  calculateNewTaxRegimeHUF,
  calculateTaxForCoprative,
  calculateTaxForDomesticCompany,
  calculateTaxForFirmsAndLLP,
  calculateTaxForForigenCompany,
} from "../customfunctions/TaxCalulator";
import { motion } from "framer-motion";

function TaxCalculatorForm({ data, setData, next }) {
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleTax() {
    if (data.payer == "huf") {
      let response = calculateNewTaxRegimeHUF(
        Number(data.taxableIncome),
        data.optfor115BAC == "true" ? true : false
      );
      setData({
        ...data,
        healthAndEducationCess: response.healthAndEducationCess,
        incomeTax: response.incomeTax,
        surcharge: response.surcharge,
        totalTaxLiability: response.totalTaxLiability,
      });
    }
    next(true);
  }
  return (
    <Box
      maxWidth="400px"
      mx="auto"
      py={4}
      as={motion.div}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
    >
      <FormControl mb={4}>
        <FormLabel>Tax Payer</FormLabel>
        <Select
          placeholder="Select"
          name="payer"
          value={data.payer}
          onChange={handleChange}
        >
          <option value="individual">Individual</option>
          <option value="firm">Firm</option>
          <option value="firm">LLP</option>
          <option value="huf">HUF</option>
          <option value="aop">AOPs/BOI</option>
          <option value="domesticCompany">Domestic Company</option>
          <option value="foreignCompany">Foreign Company</option>
          <option value="firm">Co-operative Society </option>
        </Select>
      </FormControl>

      {(data.payer == "individual" ||
        data.payer == "huf" ||
        data.payer == "aop") && (
        <FormControl>
          <FormLabel>
            Whether opting for taxation under Section 115BAC ?
          </FormLabel>
          <Select
            placeholder="Select"
            name="optfor115BAC"
            value={data.optfor115BAC}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormControl>
      )}

      <FormControl mb={4}>
        <FormLabel>Net Taxable Income</FormLabel>
        <Input
          type="number"
          placeholder="Net Taxable Income"
          name="taxableIncome"
          value={data.taxableIncome}
          onChange={handleChange}
        />
      </FormControl>

      {/* <FormControl mb={4}>
        <FormLabel>Income Tax</FormLabel>
        <Input type="number" placeholder="Income Tax" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Surcharge</FormLabel>
        <Input type="number" placeholder="Surcharge" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Education Cess</FormLabel>
        <Input type="number" placeholder="Education Cess" />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Secondary and higher education cess</FormLabel>
        <Input
          type="number"
          placeholder="Secondary and higher education cess"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Total Tax Liability</FormLabel>
        <Input type="number" placeholder="Total Tax Liability" />
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
      </FormControl> */}

      <Button colorScheme="blue" mt={4} width={"full"} onClick={handleTax}>
        Next
      </Button>
    </Box>
  );
}

export default TaxCalculatorForm;
