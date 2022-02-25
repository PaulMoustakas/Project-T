import { Box, Image, Button, Container, Text, Input } from '@chakra-ui/react';
import axios from "axios";
import ConnectButton from "../components/ConnectButton";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useMint, useContractMint } from "../hooks";


export default function Mint() {
  const { activateBrowserWallet, account } = useEthers();
  const response = useMint();
  const { state, send: mintNFT } = useContractMint("mintNFT");


  function handleMint() {
    mintNFT(account, "hejsan");
  }


  return  (

    <Container
      background="green.700"
      borderRadius="xl"
      d="flex"
      alignItems="center"
      py="10" flexDirection="row"
      height="75px"
      maxWidth="75vh"
    >

      <Box
        flexDirection="row"
        d="flex"
        maxWidth="100vh"
        w="100%"
      >
          <Button
          onClick={handleMint}
          variant="outline"
          bg="gray.700"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          _active={{
            backgroundColor: "blue.800",
            borderColor: "blue.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
          width="200px"
        >
          <Text
            color="white"
            fontSize="md"
            fontWeight="bold"
            mr="2"
          >
              Review Address
          </Text>
        </Button>

    <Box boxSize="8"> </Box>

        <Input
          maxWidth="460px"
          placeholder="0x0000000000000000000000000000000000000000"
          color="blue.300"
        />
      </Box>
    </Container>
  )
}
