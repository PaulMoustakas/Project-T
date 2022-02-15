

import React, { useState, useEffect } from 'react';
import { Box, Image, Button, ButtonGroup, Container, Heading, Text, Input } from '@chakra-ui/react';
import axios from "axios";
import brandLogo from "../assets/BankID_logo_white.png"
import PropTypes from 'prop-types';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { VisuallyHidden, VisuallyHiddenInput } from '@chakra-ui/react'

export default function Example() {

const [value,  setValue] = React.useState('');
const handleChange = (event:any) => setValue (event.target.value);


const [loading, setLoading] = useState(false);
const [complete, setComplete] = useState(0);
const [color, setColor] = useState("red.300");






function handleConnectBankID () {
  identifyUser(value);

  setTimeout(() => {

  }, 2000);
  setValue('');
  setLoading(false);
}


  return   (
    <Box
      flexDirection="row"
      position="fixed"

      d="flex"
      maxWidth="100vh"
      p={4}
      w="100%"
      >
      <Button

      onClick={ handleConnectBankID }
      isLoading={loading ? loading : false}
      variant="outline"
      bg="blue.800"
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

    <Text color="white" fontSize="md" fontWeight="bold" mr="2">
        Bank-ID
        </Text>
        <Image boxSize="40px" src={brandLogo} alt="School"/>

      </Button>
        <Input
        maxWidth="180px"
        value={value}
        onChange={handleChange}
        placeholder="YYYYMMDD-XXXX"
        color="blue.300"
        />


      <CircularProgress
      size="40px"
      value={complete}
      color={color}
      thickness='12px' />
    </Box>
  );


      async function identifyUser(personalNumber:any) {
        setLoading(true);
        var data = JSON.stringify({
          "personalNumber": personalNumber
        });
        console.log (data);

        return axios({
          method: "post",
          url: "http://localhost:8080/bankID/authenticate",
          data: data,
          headers: {
            "Content-Type": "application/json"
          },
        }).then(
          (response) => {
            if (response.data.orderRef != null) {
              setLoading(false);
              setValue('');
              setComplete(100);
              setColor('green.300')
              console.log(response.data);
              return response.data.autoStartToken;
            } else {
              setColor('orange.300')
              console.log("nåt blev tokigt");
            }
          },
          (error) => {
            setColor('red.300')
            console.log(error);
          }
        );
      }



      const bankIDfuntion = async (value:any) => {
        try {
        const data = await axios
        .post('http://localhost:8080/bankID/authenticate')
        .then(res => {
          console.log(res)
          console.log(value)
        });

      setLoading(true);
      } catch (e) {
          console.log(e)
        }
      }




}
