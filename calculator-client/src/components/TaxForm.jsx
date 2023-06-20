import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

function TaxCalculatorForm() {
  return (
    <Box maxWidth="400px" mx="auto" py={4}>
      <FormControl mb={4}>
        <FormLabel>Tax Payer</FormLabel>
        <Select placeholder="Select">
          <option value="individual">Individual</option>
          <option value="company">Company</option>
          <option value="firm">Firm</option>
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Whether opting for taxation under Section 115BAC?</FormLabel>
        <Select placeholder="Select">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Net Taxable Income</FormLabel>
        <Input type="number" placeholder="Net Taxable Income" />
      </FormControl>

      <FormControl mb={4}>
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
      </FormControl>

      <Button colorScheme="blue" mt={4}>
        Calculate
      </Button>
    </Box>
  );
}

export default TaxCalculatorForm;
