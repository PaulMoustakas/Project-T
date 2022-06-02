import { Box, Image, Button, Container, Text, Input } from '@chakra-ui/react';
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useMint, useContractMint } from "../hooks";



export default function Mint( {hashValue}: any) {
  const response = useMint();
  const { state, send: mintNFT } = useContractMint();


  function handleMint() {
    mintNFT();
  }


  return  (

    <Container

      borderRadius="xl"
      d="flex" alignItems="center" py="10" flexDirection="row"
      height="75px"
      maxWidth="75vh"
      marginTop="5"
      marginLeft={330}
    >

      <Box
        flexDirection="row"
        d="flex"
        maxWidth="100vh"
        w="100%"
      >
          <Button
          colorScheme='yellow'
          onClick={handleMint}
          variant="outline"
  
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
              Mint NFT
          </Text>
        </Button>
      </Box>
    </Container>
  )
}
