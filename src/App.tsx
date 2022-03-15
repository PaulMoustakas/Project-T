import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import AccountModal from "./components/AccountModal";
import Banner from "./components/Banner";
import "@fontsource/inter";
import AppNav from "./components/AppNav";




function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <ChakraProvider theme={theme}>
      <Banner handleOpenModal={onOpen} handleLogin/>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>

  );
}

export default App;
