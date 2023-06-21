import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
let init = {
  AnnualLetableValue: 0,
  MunicipalTaxes: 0,
  UnrealizedRent: 0,
  NetAnnualValue: 0,
  StandardDeduction: 0,
  InterestonHousingLoan: 0,
  IncomefromLetoutHouseProperty: 0,
};
export default function HousePropertyForm({ getdata, setdata }) {
  const [data, setData] = useState(init);
  function handleNetAnnualValue() {
    let value =
      Number(data.AnnualLetableValue) -
      (Number(data.MunicipalTaxes) + Number(data.UnrealizedRent));
    let deduction = value * 0.3;
    let total = value - deduction;
    setData({
      ...data,
      NetAnnualValue: value,
      StandardDeduction: deduction,
      IncomefromLetoutHouseProperty: total,
    });
    setdata({ ...getdata, incomeFromHouseProperty: total });
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    handleNetAnnualValue();
  }, [data.AnnualLetableValue, data.UnrealizedRent, data.MunicipalTaxes]);

  return (
    <Box bg="gray.500" p="2%">
      <Text m="2" fontWeight={"bold"}>
        b. Income from Let-out Property
      </Text>
      <FormControl mb={4}>
        <FormLabel>
          1. Annual Letable Value/Rent Received or Receivable
        </FormLabel>
        <Input
          type="number"
          name="AnnualLetableValue"
          value={data.AnnualLetableValue}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>2. Less: Municipal Taxes Paid During the Year </FormLabel>
        <Input
          type="number"
          name="MunicipalTaxes"
          value={data.MunicipalTaxes}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>3. Less:Unrealized Rent </FormLabel>
        <Input
          type="number"
          name="UnrealizedRent"
          value={data.UnrealizedRent}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>4. Net Annual Value (1-(2+3)) </FormLabel>
        <Input
          type="number"
          name="NetAnnualValue"
          value={data.NetAnnualValue}
          variant={"filled"}
        />
      </FormControl>
      <Text m="2" fontWeight={"bold"}>
        Less: Deductions from Net Annual Value
      </Text>
      <FormControl mb={4}>
        <FormLabel>i. Standard Deduction @ 30% of Net Annual Value </FormLabel>
        <Input
          type="number"
          name="StandardDeduction"
          value={data.StandardDeduction}
          variant={"filled"}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Income from Let-out House Property </FormLabel>
        <Input
          type="number"
          name="IncomefromLetoutHouseProperty"
          value={data.IncomefromLetoutHouseProperty}
          variant={"filled"}
        />
      </FormControl>
    </Box>
  );
}
