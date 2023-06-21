import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HousePropertyForm from "./HousePropertyForm";

export default function IndividualForm({ data, setData }) {
  const [showHouseProperty, setShowHouseProperty] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  return (
    <Box>
      <FormControl mb={4}>
        <FormLabel>Male / Female / Senior Citizen</FormLabel>
        <Select
          placeholder="Select"
          name="gender"
          value={data.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="seniorCitizen">Senior Citizen</option>
          <option value="superSeniorCitizen">Super Senior Citizen</option>
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Residential Status</FormLabel>
        <Select
          placeholder="Select"
          name="residentialStatus"
          value={data.residentialStatus}
          onChange={handleChange}
        >
          <option value="resident">Resident</option>
          <option value="nonResident">Non-Resident</option>
          <option value="notOrdinaryResident">Not Ordinary Resident</option>
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>
          Income from salary (Income from Salary before Exemptions/Deductions)
        </FormLabel>
        <Input
          type="number"
          placeholder="Income from salary"
          name="incomeFromSalary"
          value={data.incomeFromSalary}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>
          <Text>
            Income From House Property {"  "}
            <span
              style={{
                backgroundColor: "blue",
                width: "40px",
                fontWeight: "bold",
                padding: "5px",
                borderRadius: "50%",
              }}
            >
              <Tooltip label="Note: In case the assesse is opted for Section 115BAC, Loss under head House Property for rented house shall not be allowed to set off from any other head of income and cannot be carried forward">
                !
              </Tooltip>
            </span>
          </Text>
        </FormLabel>
        <InputGroup size="md">
          <Input
            type="number"
            placeholder="Income from salary"
            name="incomeFromHouseProperty"
            value={data.incomeFromHouseProperty}
            variant={"filled"}
          />
          <InputRightElement width={"20%"}>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowHouseProperty(!showHouseProperty)}
            >
              {showHouseProperty ? "Hide Details" : "Show Details"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {showHouseProperty && (
        <HousePropertyForm getdata={data} setdata={setData} />
      )}
    </Box>
  );
}
