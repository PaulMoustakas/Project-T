import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "../theme";
import AccountModal from "./AccountModal";
import Banner from "./Banner";
import "@fontsource/inter";


export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
        
    <ChakraProvider theme={theme}>
      <Banner handleOpenModal={onOpen} handleLogin/>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>

  );
}

export default Home;

