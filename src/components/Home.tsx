import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "../theme";
import AccountModal from "./AccountModal";
import Banner from "./Banner";
import "@fontsource/inter";
import AppNav from "./AppNav";


export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
        
    <ChakraProvider theme={theme}>
       <AppNav handleOpenModal={onOpen} handleLogin/>
       <Banner handleOpenModal={onOpen} handleLogin/>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>

  );
}

export default Home;

