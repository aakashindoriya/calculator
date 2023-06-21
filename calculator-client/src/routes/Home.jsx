import React, { useState } from "react";
import TaxCalculatorForm from "../components/FirstTaxForm";
import TaxResultForm from "../components/SecondTaxForm";
import { Box, Heading } from "@chakra-ui/react";
const init = {
  payer: "",
  optfor115BAD: false,
  optfor115BAE: false,
  optfor115BAC: false,
  taxableIncome: 0,
  totalTaxLiability: 0,
  incomeTax: 0,
  surcharge: 0,
  healthAndEducationCess: 0,
  relief: 0,
  tds: 0,
  gender: "male",
  residentialStatus: "resident",
  incomeFromSalary: 0,
  incomeFromHouseProperty: 0,
};
export default function Home() {
  const [data, setData] = useState(init);
  const [isNext, setIsNext] = useState(false);
  return (
    <Box p="2%" maxW="99vw" bg="gray.100" minH={"100vh"}>
      <Heading m="1%">
        ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24
      </Heading>
      {!isNext && (
        <TaxCalculatorForm data={data} setData={setData} next={setIsNext} />
      )}
      {isNext && (
        <TaxResultForm data={data} setData={setData} next={setIsNext} />
      )}
    </Box>
  );
}
