import { Button, Box, Text, Image } from "@chakra-ui/react";
import brandLogo from "../assets/BankID_logo_white.png";
import {useEffect} from "react";




type Props = {
  handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {

  function handleBankID() {

  }

  return  (
    <>
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          hej
        </Text>
      </Box>
      <Button
        onClick={handleBankID}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
        Bank-ID
        </Text>
        <Image boxSize="40px" src={brandLogo} alt="School"/>
      </Button>
    </Box>
</>
  );
}
