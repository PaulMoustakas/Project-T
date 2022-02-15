


import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";


type Props = {
  handleOpenModal: any;
};

export default function NFT() {



    return (
      <Box
        display="flex"
        alignItems="center"
        background="gray.700"
        borderRadius="xl"
        py="0"
      >
        <Box px="3">
          <Text color="white" fontSize="md">

          </Text>
        </Box>
        <Button

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

          </Text>
          <Identicon />
        </Button>
      </Box>

)
}
