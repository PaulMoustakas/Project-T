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

        <Box>
          <Heading>
            <Box> Tokenized Bank-ID</Box>
          </Heading>
          <Box mt="6" >

          <Text>

          <Text>    Tokenized Bank-ID is a part of a bachelor thesis in Computer Science, developed at Malmö University.
                    The Project aims to build a Blockchain-based reputation system, resistant against sybil attacks.
                    We issue digital identity certificates to entities authenticated by BankID, through NFTs.</Text>
          <br />


          <Text>    A Sybil attack is a type of attack on a computer network service in which an attacker subverts the service's reputation system by creating
                    a large number of pseudonymous identities and uses them to gain a disproportionately large influence. </Text>
          <br />

          We let Swedish e-ID service Bank-ID serve as a trusted centralized entity, vouching for 1:1 relationship between entity and identity.
          No personal information is stored on -chain. The NFTs are to serve as basis for the reputation system and our requirement for participation.


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
