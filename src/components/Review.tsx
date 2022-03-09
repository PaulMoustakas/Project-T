import { Box, Image, Button, Container, Text, Input, Icon, NumberInput, Textarea } from '@chakra-ui/react';
import axios from "axios";
import ConnectButton from "../components/ConnectButton";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useReview, useContractMint } from "../hooks";
import { StarIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'






export default function Review() {
  const { activateBrowserWallet, account } = useEthers();
  const response = useReview();
  const { state, send: returnPerson } = useContractMint("returnPerson");



  const rating = {
    reviewCount: 2,
    rating: 5,
  }


  function handleReview() {
    console.log(account)
    returnPerson(account);
  }


  return  (

    <Container
      background="teal.500"
      borderRadius="xl"
      alignItems="center"
      py="10"
      flexDirection="row"
      height="300px"
      maxWidth="75vh"
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

      {/** Escape Button Size */}
        <Box height="38px" width="200px" bg="blue.900"> </Box>
        <Box boxSize="8"> </Box>


      {/** Rating Input */}
        <NumberInput
        width="70px"
        defaultValue={1}
        min={1}
        max={5}
        keepWithinRange={true}
        clampValueOnBlur={true}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

      <Box boxSize="8"> </Box>


      <Box
      alignItems="center"
      display="center"
      fontSize="lg"
      >

      Trust Factor:
        <Box fontWeight='semibold' fontSize="20px" ml="2" color={rating.rating < 3 ? 'red.500' : 'blue.700'}>
            {rating.rating}
        </Box>

      </Box>

      <Box boxSize="8" width="60px"> </Box>


      {/** Current review avarage on Address */}
        <Box display='flex' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating.rating ? 'blue.700' : 'gray.300'}
                />
              ))}
              <Box as='span' ml='2' color='gray.700' fontSize='lg'>
              {2} reviews
              </Box>
        </Box>
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
        overflow="keepWithinRange"
        flexWrap="wrap"
        height="100px"
        width="460px"

        placeholder="Comment"
        color="blue.300"
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

      {/** Escape Button Size */}
        <Box height="38px" width="200px" bg="blue.900"> </Box>
        <Box boxSize="8"> </Box>


      Hej
      </Box>

      </Box>



    </Container>
  )
}
