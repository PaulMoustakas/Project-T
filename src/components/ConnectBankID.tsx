

import React, { useState, useEffect } from 'react';
import { Box, Image, Button, ButtonGroup, Container, Heading, Text, Input } from '@chakra-ui/react';
import axios from "axios";
import brandLogo from "../assets/BankID_logo_white.png"

export default function Example() {

  const [value,  setValue] = React.useState('');
  const handleChange = (event:any) => setValue (event.target.value);



function handleConnectBankID () {
  identifyUser(value);
}

  return (
    <Box
      boxSize="70px"

      maxWidth="100vh"
      p={4}
      w="100%"
      display="flex"
      alignItems=" baseline"
      >
      <Button
      onClick={handleConnectBankID}
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
    </Box>
  );



<<<<<<< HEAD
      async function identifyUser(personalNumber:any) {

        var data = JSON.stringify({
          "personalNumber": personalNumber
        });
        console.log (data);

=======
      async function identifyUser() {

        var data = JSON.stringify({
          "endUserIp": "80.217.149.82",
          "personalNumber": "199706127751"
        });
        
>>>>>>> 8577a46822752e23d0bc3b763c567f1aabd7d111
        return axios({
          method: "post",
          url: "http://localhost:8080/bankID/authenticate",
          data: data,
          headers: {
            "Content-Type": "application/json"
          },
        }).then(
          (response) => {
            if (response.data.access_token != null) {
              console.log(response.data);
              return response.data.access_token;
            } else {
              console.log("nåt blev tokigt");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }

}
