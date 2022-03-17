import { Box, ChakraProvider, Heading, Input, useDisclosure,Text,Textarea, Stack,} from "@chakra-ui/react";
import theme from "../theme";
import AppNav from "./AppNav";
import "@fontsource/inter";
import AccountModal from "./AccountModal";
import { useState } from "react";
import { useFetchReviews, useFetchUser, useGetReviews, useGetUser } from "../hooks";
import { StarIcon } from "@chakra-ui/icons";


function Feature( {title} : {title:any},  {desc} : {desc:any}, {rest} : {rest:any}) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}



export function ReviewDatabase()  {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [address, setAddress] = useState ('');
   
    const [allValues, setAllValues] = useState ({
      personalNumber: "",
      address: "",
      trustScore: "",
      totalScore: 0,
      amountOfReviews: 0,
      ratingAverage : 0,
    });

    const reviewCall = useFetchUser(address)
  
    const {send: getReviews } = useGetUser();
    

   const handleChange = (e:any) => {
   setAddress(e.target.value)
   }


    const handleSubmit = (e: any) => {

      e.preventDefault(); 
      console.log("SUBMIT ATTEMPTED " + address)
      getReviews(address)
      
      let personArray = reviewCall;
    

      if (reviewCall != undefined) {
     
      allValues.address = "Adress: " + address;
      allValues.personalNumber = "HashedGovID: " + personArray?.at(0).at(0);
      allValues.trustScore = "TrustScore: " + personArray?.at(0).at(1);
      allValues.totalScore = personArray?.at(0).at(3);
      allValues.amountOfReviews = personArray?.at(0).at(4);
      allValues.ratingAverage = allValues.totalScore / allValues.amountOfReviews;

      console.log(allValues.ratingAverage + " Rating average")

      setAllValues(allValues)

      }

      else {
        allValues.address = ""
        allValues.personalNumber = ""
        allValues.trustScore = ""
        allValues.ratingAverage = 0;
      }
    }


    return (
        
        <ChakraProvider theme={theme}>
          <AppNav handleOpenModal={onOpen} handleLogin/>
          <AccountModal isOpen={isOpen} onClose={onClose} />
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
        <form onSubmit= {handleSubmit}>
          <Input htmlSize={100}  variant='outline' placeholder='Address' width='auto' 
          marginTop={5} marginLeft={100}  onChange={handleChange} onSubmit={handleSubmit}  />
          </form>
        
          <Box p={5} shadow="md" borderWidth="1px" height={120}  width="101vh" marginLeft={100} marginTop={5}>
          <Heading fontSize="xl">{allValues.address}</Heading>
          <Heading fontSize="xl">{allValues.personalNumber}</Heading>
          <Heading fontSize="xl">{allValues.trustScore }</Heading>
          <Box display='flex' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < allValues.ratingAverage ? 'blue.700' : 'gray.300'}
                />
              ))}
              <Box as='span' ml='2' color='gray.700' fontSize='lg'>
              {2} reviews
              </Box>
        </Box>
    
      </Box>

          <Stack spacing={8}  ></Stack>


        </ChakraProvider>
    
      );

}
export default ReviewDatabase;
