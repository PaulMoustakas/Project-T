

import React, { useState, useEffect } from 'react';
import { Box, Image, Button, Container, Heading, Text } from '@chakra-ui/react';
import axios from "axios";
import brandLogo from "../assets/BankID_logo_white.png"

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;


  });

  return (
    <Box>
      <Button onClick={() => identifyUser()}
      bg="blue.800"
      border="1px solid transparent"
      _hover={{
        border: "1px",
        borderStyle: "solid",
        borderColor: "blue.400",
        backgroundColor: "gray.700",
    }}
    borderRadius="xl"
      m="1px"
      px={3}
      height="38px"
    >
    <Text color="white" fontSize="md" fontWeight="medium" mr="2">
        Bank-ID
        </Text>
        <Image boxSize="40px" src={brandLogo} alt="School"/>
      </Button>
        <p>You clicked {identifyUser} times</p>
    </Box>
  );



      async function identifyUser() {

        var data = JSON.stringify({
          "endUserIp": "80.217.149.82",
          "personalNumber": "199706127751"
        });
        
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
