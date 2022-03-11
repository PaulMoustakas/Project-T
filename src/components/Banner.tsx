import { Box, Image, Container, Heading, Text } from '@chakra-ui/react';
import brandLogo from "../assets/mau.png";
import illustrator from "../assets/Illustrator.png";
import ConnectButton from "../components/ConnectButton";
import ConnectBankID from "../components/ConnectBankID";
import NFTButton from "../components/NFTButton";
import Review from "../components/Review";
import React, { useState } from 'react';



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
      <Image boxSize="90px" src={brandLogo} alt="School"/>
      <Box>
        <ConnectButton handleOpenModal={handleOpenModal}/>
      </Box>
    </Box>
  </header>

{/* main punch line */}

  <Box>
    <Container maxWidth="container.xl">
      <Box d="flex" alignItems="center" py="20" flexDirection="row">
        <Box>
          <Heading>
            <Box> Project T </Box>
          </Heading>
          <Box mt="6" >

          <Text>

          <Text>    Project T is a part of a bachelor thesis in Computer Science, developed at Malmö University. <tr> </tr>
                    The Project aims to build a Blockchain-based reputation system, resistance against sybil attacks.
                    We issue digital identity certificates to entities authenticated by BankID, through NFTs.</Text>
          <br />


          <Text>    A Sybil attack is a type of attack on a computer network service in which an attacker subverts the service's reputation system by creating
                    a large number of pseudonymous identities and uses them to gain a disproportionately large influence. </Text>
          <br />

          We let Swedish e-ID service Bank-ID serve as a trusted centralized entity, vouching for 1:1 relationship between entity and identity.
          No personal information is stored on-chain. The NFTs are to serve as basis for the reputation system and our requirement for participation.


          </Text>

          </Box>
          <Box d="flex" alignItems="center"> </Box>
        </Box>
        <Box w="100%">
          <Image w="100%" src={illustrator}  alt="illustrator" />
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
