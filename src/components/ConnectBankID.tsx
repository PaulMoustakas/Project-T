

import React, { useState, useEffect } from 'react';
import { Box, Image, Button, ButtonGroup, Container, Heading, Text, Input } from '@chakra-ui/react';
import axios from "axios";
import brandLogo from "../assets/BankID_logo_white.png"
import PropTypes from 'prop-types';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {ProjectContext} from "../Helper/Context";
import { useEthers, useEtherBalance } from "@usedapp/core";


type Props = {
  childToParent:any
};


const ConnectBank = ({childToParent}: Props) => {
const { activateBrowserWallet, account } = useEthers();
const [value, setValue] = React.useState('');
const handleChange = (event:any) => setValue (event.target.value);
const [loading, setLoading] = useState(false);
const [complete, setComplete] = useState(0);
const [color, setColor] = useState("red.300");




function handleConnectBankID () {
  identifyUser(value);
}


  return (

    <Container
      background="gray.700"
      borderRadius="xl"
      d="flex"
      alignItems="center"
      py="10"
      flexDirection="row"
      height="75px"
      maxWidth="75vh"
    >

      <Box

        flexDirection="row"
        d="flex"
        maxWidth="100vh"
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

      <Box boxSize="8"> </Box>
          <Input
            maxWidth="180px"
            value={value}
            onChange={handleChange}
            placeholder="YYYYMMDD-XXXX"
            color="blue.300"
          />
      <Box boxSize="8"> </Box>
          <CircularProgress
            size="40px"
            value={complete}
            color={color}
            thickness='12px'
            />
      </Box>
    </Container>
  );


  async function identifyUser(personalNumber:any) {
    setLoading(true);
    var data = JSON.stringify({
      "personalNumber": personalNumber
    });

    console.log (data);
    console.log(account);

    return axios({
      method: "post",
      url: "http://localhost:8080/bankID/authenticate",
      data: data,
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      if (response.data.orderRef != null) {
        setValue('');
        setComplete(10);
        setColor('orange.300')
        console.log(response.data);
        setTimeout(() => {
          collectUserStatus(account, response.data.orderRef);
        }, 8000);
        setComplete(50);
        return response.data.orderRef;
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

  async function collectUserStatus(account:any, orderRef:any) {
    setComplete(60);
    setLoading(true);
    setTimeout(() => {
      console.log("2 sec");
    }, 2000);
    setComplete(70);
    var axios = require('axios');
    var data = JSON.stringify({
      "orderRef": orderRef
    }
  );

  var config = {
    method: 'post',
    url: 'http://localhost:8080/bankID/collect?address=' +  account,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  setComplete(80);

  axios(config)
  .then(function (response:any) {
    setLoading(false);
    setComplete(100);
    setColor('green.300')
    console.log(response.data);
    childToParent(response);


  })
  .catch(function (error:any) {
    console.log(error);
  }
);
}
}


export default ConnectBank;
