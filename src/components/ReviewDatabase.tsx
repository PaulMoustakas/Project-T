import { Box, ChakraProvider, Heading, Input, useDisclosure,Text } from "@chakra-ui/react";
import theme from "../theme";
import AppNav from "./AppNav";
import "@fontsource/inter";


export function ReviewDatabase()  {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        
        <ChakraProvider theme={theme}>
          <AppNav handleOpenModal={onOpen} handleLogin/>
          <Box marginTop={50} marginLeft = {100}>
            
          <Heading>
            <Box> Review database query tool </Box>
          </Heading>
          <Box mt="6" >
          <Text>    
            Input an address to query the Goerli Ethereum blockchain for reviews associated with that address.<tr> </tr>
          </Text>
    

          </Box>
          <Box d="flex" alignItems="center"> </Box>
        </Box>
          <Input htmlSize={100}  variant='outline' placeholder='Address' width='auto' marginTop={5} marginLeft={100}/>
        
        </ChakraProvider>
    
      );

}
export default ReviewDatabase;