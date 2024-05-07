import { Footer, GetStarted, Learn, MakingProgress, MapReach, Navbar } from "@/components";
import { Box, Container, Divider } from "@chakra-ui/react";
import React from "react";


const index = () => {
  return (
    <>
      <Container maxW={"100vw"} px={{ base: 5, md: 10, lg: 20 }}>
        <Navbar />
        <GetStarted />
        <Divider orientation="horizontal" border="1px solid #B0B0B0" />
        <MakingProgress />
        <MapReach />
      </Container>
      <Learn />
      <Container maxW={"100vw"} px={{ base: 5, md: 10, lg: 20 }}>
        <Footer />
      </Container>
    </>
  );
};

export default index;
