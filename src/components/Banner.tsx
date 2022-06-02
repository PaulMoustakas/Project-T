import { Box, Image, Container, Heading, Text } from '@chakra-ui/react';
import illustrator from "../assets/Illustrator.png";
import ConnectBankID from "../components/ConnectBankID";
import NFTButton from "../components/NFTButton";
import Review from "../components/Review";
import AppNav from './AppNav';
import { useState } from 'react';



type Props = {
  handleOpenModal: any;
  handleLogin: any;
};

function Banner ({ handleOpenModal }: Props) {
const [hash, setHash] = useState('');
const childToParent = (childdata:any) => {
  setHash(childdata);
}


  return (
    <>
   <header>
    <Box
    d="flex"
    align-items="center"
    justifyContent="space-between"
    ml={6}
    mr={6}
    >
    </Box>
  </header>

  <Box>
  <br />
    <Container maxWidth="container.xl" marginLeft = {320} marginTop={-38}>
      <Box d="flex" alignItems="center" py="20" flexDirection="row">

        <Box  >
          <Heading fontWeight="bold" fontSize="53px">
            <Box > Solidity Project</Box>
          </Heading>
          <Box mt="6" >

          <Text>

          <Text fontSize="22px">    Independent studies in computer science Learning development of decentralized applications using Solidity
          </Text>
          <br />


            Aims to understand and engage the blockchain, and be able to create dApp contenct to deplay on the network.

          </Text>

          </Box>
          <Box d="flex" alignItems="center"> </Box>
        </Box>
        <Box w="100%" marginLeft = {20}>


        </Box>
      </Box>
    </Container>



      </Box>

    {/* Bank ID */}
    <ConnectBankID childToParent={childToParent}/>
    {/* NFT Mint */}
    <NFTButton hashValue={hash} />
    {/* Review */}
    <Review/>



  </>
);
}

export default Banner;
