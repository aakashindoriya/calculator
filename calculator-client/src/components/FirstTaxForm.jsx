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
import IndividualForm from "./IndividualForm";
import { useEffect } from "react";

function TaxCalculatorForm({ data, setData, next }) {
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handleTax() {
    if (data.taxableIncome == 0) {
      alert("Please Enter Taxable-Income");
      return;
    }
    if (data.payer == "huf" || data.payer == "individual") {
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
    if (data.payer == "firm" || data.payer == "llp") {
      let response = calculateTaxForFirmsAndLLP(Number(data.taxableIncome));
      setData({
        ...data,
        healthAndEducationCess: response.healthAndEducationCess,
        incomeTax: response.incomeTax,
        surcharge: response.surcharge,
        totalTaxLiability: response.totalTaxLiability,
      });
    }
    if (data.payer == "domesticCompany") {
      let response = calculateTaxForDomesticCompany(Number(data.taxableIncome));
      setData({
        ...data,
        healthAndEducationCess: response.healthAndEducationCess,
        incomeTax: response.incomeTax,
        surcharge: response.surcharge,
        totalTaxLiability: response.totalTaxLiability,
      });
    }
    if (data.payer == "foreignCompany") {
      let response = calculateTaxForForigenCompany(Number(data.taxableIncome));
      setData({
        ...data,
        healthAndEducationCess: response.healthAndEducationCess,
        incomeTax: response.incomeTax,
        surcharge: response.surcharge,
        totalTaxLiability: response.totalTaxLiability,
      });
    }
    if (data.payer == "co-oprative") {
      let response = calculateTaxForCoprative(
        Number(data.taxableIncome),
        data.optfor115BAD == "true" ? true : false
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
  function handleNetIncome() {
    let total =
      Number(data.incomeFromSalary) + Number(data.incomeFromHouseProperty);
    setData({ ...data, taxableIncome: total });
  }
  useEffect(() => {
    handleNetIncome();
  }, [data.incomeFromSalary, data.incomeFromHouseProperty]);

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
        <FormLabel>Tax Payer</FormLabel>
        <Select
          placeholder="Select"
          name="payer"
          value={data.payer}
          onChange={handleChange}
        >
          <option value="individual">Individual</option>
          <option value="firm">Firm</option>
          <option value="llp">LLP</option>
          <option value="huf">HUF</option>
          <option value="aop">AOPs/BOI</option>
          <option value="domesticCompany">Domestic Company</option>
          <option value="foreignCompany">Foreign Company</option>
          <option value="co-oprative">Co-operative Society </option>
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
      {data.payer == "individual" && (
        <IndividualForm data={data} setData={setData} />
      )}
      {data.payer == "co-oprative" && data.optfor115BAE != "true" && (
        <FormControl>
          <FormLabel>
            Whether opting for taxation under Section 115BAD ?
          </FormLabel>
          <Select
            placeholder="Select"
            name="optfor115BAD"
            value={data.optfor115BAD}
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </FormControl>
      )}
      {data.payer == "co-oprative" && data.optfor115BAD != "true" && (
        <FormControl>
          <FormLabel>
            Whether opting for taxation under Section 115BAE ?
          </FormLabel>
          <Select
            placeholder="Select"
            name="optfor115BAE"
            value={data.optfor115BAE}
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

      <Button colorScheme="blue" mt={4} width={"full"} onClick={handleTax}>
        Next
      </Button>
    </Box>
  );
}

export default TaxCalculatorForm;
