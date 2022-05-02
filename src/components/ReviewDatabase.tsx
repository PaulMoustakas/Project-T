import { Box, ChakraProvider, Heading, Input, useDisclosure,Text,Textarea, Stack,} from "@chakra-ui/react";
import theme from "../theme";
import AppNav from "./AppNav";
import "@fontsource/inter";
import AccountModal from "./AccountModal";
import { useState } from "react";
import { useFetchReviews, useFetchUser, useGetReviews, useGetUser } from "../hooks";
import { StarIcon } from "@chakra-ui/icons";
import { BigNumber } from "ethers";




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

     const [isSubmitted, setIsSubmitted] = useState (false);

    function RenderUserbox() {
      return (
        <Box p={5} shadow="md" borderWidth="1px" height={170}  width="122vh" marginLeft={100} marginTop={5}>
              <Heading fontSize="xl">{allValues.address}</Heading>
              <Heading fontSize="xl">{allValues.personalNumber}</Heading>
              <Heading fontSize="xl">{allValues.trustScore }</Heading>
              <Heading fontSize="xl">{"Amount of reviews: " + allValues.amountOfReviews}</Heading>
              <Box display='flex' alignItems='center'>
              <Heading marginRight = {2} fontSize="xl">{"Rating average: " + allValues.ratingAverage} </Heading>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < allValues.ratingAverage ? 'blue.700' : 'gray.300'}
                    />
                  ))}
                  <Box as='span' ml='2' color='gray.700' fontSize='lg'>
                  {} 
                  </Box>
              </Box>
              </Box>
      );
    }

    const getUserCall = useFetchUser(address);
  
    const {send: getUser } = useGetUser();

    const getReviewsCall = useFetchReviews (address);

    const {send: getReviews } = useGetReviews();

    const [userReviewArray, setReviewArray] = useState<Array<{
        reviewID: any,
        reviewScore: any,
        timeSubmitted: any, 
        amountOfUpvotes: any,
        amountOfDownvotes: any,
        reviewText: any;
        reviewerAddress: any,
        recipientAddress: any
    } >>([])

    
    

   const handleChange = (e:any) => {
   setAddress(e.target.value)
   if (e.target.value == "" || getUserCall == undefined) {
     setIsSubmitted(false)
   }
   }


    const handleSubmit = (e: any) => {

      e.preventDefault(); 
      console.log("SUBMIT ATTEMPTED " + address)
      getUser(address)
      setIsSubmitted(true)
      
      let personArray = getUserCall;
    

      if (getUserCall != undefined) {
     
      allValues.address = "Adress: " + address;
      allValues.personalNumber = "HashedGovID: " + personArray?.at(0).at(0);
      allValues.trustScore = "TrustScore: " + personArray?.at(0).at(1);
      allValues.totalScore = personArray?.at(0).at(3);
      allValues.amountOfReviews = personArray?.at(0).at(4);
      allValues.ratingAverage = (allValues.totalScore /2) / allValues.amountOfReviews;
      allValues.ratingAverage = + allValues.ratingAverage.toFixed(2);

      console.log(allValues.ratingAverage + " Rating average")
      setAllValues(allValues)
       
      getReviews(address);

      var reviewArray = getReviewsCall;

      if (reviewArray != undefined) { 

        console.log(reviewArray)
      
      for (var i = 0; i < reviewArray?.length; i++) {
      
      var arr = reviewArray[i];

      for (var j = 0; j < arr.length; j++) {
      
          let reviewID = arr [j].at(0);
          var reviewScore =  arr [j].at(1);
          var timeSubmitted =  arr [j].at(2);
          var amountOfDownvotes =  arr [j].at(3);
          var amountOfUpvotes =  arr [j].at(4);
          var reviewText =  arr [j].at(5);
          var reviewerAddress =  arr [j].at(6);
          var recipientAddress =  arr [j].at(7);


          setReviewArray((userReviewArray) => [ ...userReviewArray, {reviewID: reviewID, reviewScore:reviewScore, timeSubmitted: 
            timeSubmitted,amountOfUpvotes: amountOfUpvotes, amountOfDownvotes: amountOfDownvotes, reviewText:  reviewText, 
            reviewerAddress:  reviewerAddress, recipientAddress:  recipientAddress}, ]);

          

          console.log("ID= " + reviewID + "SCORE = " + reviewScore + "time = " 
          + timeSubmitted + "amount of downvotes = " + amountOfDownvotes + "amount of upvotes = " 
          + amountOfUpvotes + " review text " + reviewText + " reviewerAddress = " + reviewerAddress + " recipientAddress " + recipientAddress)

        
      }   
    }
  }
}

      else {
        setIsSubmitted(false)
        allValues.address = ""
        allValues.personalNumber = ""
        allValues.trustScore = ""
        allValues.ratingAverage = 0;
      }


      console.log(userReviewArray)
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

          {isSubmitted && <RenderUserbox/>}
        

          <Stack spacing={8}  ></Stack>


        </ChakraProvider>
    
      );

}
export default ReviewDatabase;
