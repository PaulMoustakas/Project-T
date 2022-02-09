import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";

import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";

import Banner from "./components/Banner";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>

        <Banner/>

        <AccountModal isOpen={isOpen} onClose={onClose} />


    </ChakraProvider>
  );
}

export default App;
