import { ChakraProvider, theme, useDisclosure } from "@chakra-ui/react";
import AccountModal from "./AccountModal";
import AppNav from "./AppNav";
import "@fontsource/inter";


export function ReviewDatabase()  {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
        <ChakraProvider theme={theme}>
          <AppNav handleOpenModal={onOpen} handleLogin/>
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
    
      );

}
export default ReviewDatabase;