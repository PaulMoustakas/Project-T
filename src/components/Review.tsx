import { Box, Button, Container, Text, Input, NumberInput, Textarea } from '@chakra-ui/react';
import { useReview, useReviewFunction } from "../hooks";
import React, { useState } from 'react';

import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'




export default function Review() {
 
  const [allValues, setAllValues] = useState ({
    text: "",
    addressToReview: "",
  });

  const changeHandler = (e: any) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const format = (val:any) => `` + val
  

  const [ratingValue, setRatingValue] = React.useState ('');


  const reviewCall = useReview(Number(ratingValue), allValues.text,allValues.addressToReview)

  const { state, send: reviewUser } = useReviewFunction();



  const rating = {
    reviewCount: 2,
    rating: 5,
  }


  function handleReview() {
    reviewUser(Number(ratingValue), allValues.text,allValues.addressToReview);
  }


  return  (

    <Container
      background="teal.500"
      borderRadius="xl"
      alignItems="center"
      py="10"
      marginTop="5"
      flexDirection="row"
      height="300px"
      maxWidth="75vh"
      marginLeft={330}

    >

      <Box
        flexDirection="row"
        d="flex"
        maxWidth="100vh"
        width="100vh"

      >
          <Button
          onClick={handleReview}
          variant="outline"
          bg="gray.700"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          _active={{
            backgroundColor: "blue.800",
            borderColor: "blue.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
          width="200px"
        >
          <Text
            color="white"
            fontSize="md"
            fontWeight="bold"
            mr="2"
          >
              Review Address
          </Text>
        </Button>

    <Box boxSize="8"> </Box>

        <Input
          maxWidth="460px"
          placeholder="0x0000000000000000000000000000000000000000"
          color="blue.300"
          marginBottom={2}
          name = "addressToReview"
          onChange={changeHandler}
        />
      </Box>


      {/** rating Box */}
      <Box
      py="1"
      flexDirection="row"
      d="flex"
      width="100vh"
      maxWidth="100vh"
      w="100vh"
      >

       


      {/** Rating Input */}

      <Box
      alignItems="center"
      display="center"
      fontSize="lg"
      marginLeft={60}
      >

      Rating:
        <Box fontWeight='semibold' fontSize="20px" ml="2" color={rating.rating < 3 ? 'red.500' : 'blue.700'}>
        </Box>

      </Box>
        <NumberInput
        marginLeft={5}
        width="70px"
        defaultValue={1}
        min={1}
        max={5}
        keepWithinRange={true}
        clampValueOnBlur={true}
        name = "score"
        onChange={(valueString:any) => setRatingValue(valueString)}
        value  = {format(ratingValue)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

      <Box boxSize="8"> </Box>
      <Box boxSize="8" width="60px"> </Box>        
      </Box>

      {/** Comment */}
      <Box
      flexDirection="row"
      d="flex"
      maxWidth="100vh"
      width="100vh"
      >

      {/** Escape Button Size */}
        <Box height="38px" width="200px"></Box>
        <Box boxSize="8"> </Box>


        <Textarea
        marginTop={2}
        overflow="keepWithinRange"
        flexWrap="wrap"
        height="100px"
        width="460px"
       
        placeholder="Comment"
        color="blue.300"
        id = "text"
        onChange = {changeHandler}
        />
      </Box>



      {/** rating Box */}
      <Box
      py="1"
      flexDirection="row"
      d="flex"
      width="100vh"
      maxWidth="100vh"
      w="100vh"
      >

      <Box
      flexDirection="row"
      d="flex"
      maxWidth="100vh"
      width="100vh"
      >
      </Box>

      </Box>



    </Container>
  )
}
