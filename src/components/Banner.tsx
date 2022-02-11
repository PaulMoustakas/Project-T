import { Box, Image, Button, Container, Heading, Text } from '@chakra-ui/react';
import brandLogo from "../assets/mau.png";
import illustrator from "../assets/Illustrator.png";
import ConnectButton from "../components/ConnectButton";
import ConnectBankID from "../components/ConnectBankID";





type Props = {
  handleOpenModal: any;
  handleLogin: any;
};

function Banner ({ handleOpenModal }: Props) {

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
          Project T is a project created by two students from Malmö University
          doing their Bechelor Thesis in Computer Science. The Project aims to issue
          government backed NFT, as a token to prove you are not a robot. Why?
          The ideea is that the token only represents a person, and no information is ever shared
          on the Blockchain.
          </Box>
          <Box d="flex" alignItems="center"> </Box>
        </Box>
        <Box w="100%">
          <Image w="100%" src={illustrator}  alt="illustrator" />
        </Box>
      </Box>
    </Container>

{/* Bank ID */}


    <Container
    maxWidth="container.xl"
    height="80px"

    flexDirection="row"
    d="flex"
    background="gray.700"
    borderRadius="xl"
    >
    <Box
    flexDirection="row"
    d="flex"
    alignItems="center"
    >
          <ConnectBankID  />
    </Box>



    </Container>
  </Box>
  </>
);
}

export default Banner;
