import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import { useEthers, useEtherBalance } from "@usedapp/core";


import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import ConnectBankID from "./components/ConnectBankID";
import Banner from "./components/Banner";
import "@fontsource/inter";
import { ProjectContext } from "./Helper/Context";


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
