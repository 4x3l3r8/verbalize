import React from "react";
import { Box, Text, Wrap, WrapItem, } from "@chakra-ui/react";
import NextImage from "next/image";



export const MapReach = () => {
  return (
    <Box mt="40" mb="40">
      <Box textAlign="center" mb="32">
        <Text fontSize="6xl" fontWeight={"bold"} textAlign="center" mb="12" width="2000" >Learn a  langauage the fun way</Text>
        <Text fontSize="2xl">Reach your language fast with world #1 education app</Text>
      </Box>
      <Box>
        <NextImage
          height={"100"}
          width={2500}
          src="/map.png"
          alt="alternative pictures"
        />
      </Box>
      <Wrap justify={{ base: "center", md: "space-around" }} w={"100%"}>
        <WrapItem flexDir={"column"} alignItems={"center"}>
          <Text fontSize={{ base: "6xl", lg: "8xl" }} fontWeight="bold">4.5K+</Text>
          <Text>Daily register from new users</Text>
        </WrapItem>
        <WrapItem flexDir={"column"} alignItems={"center"}>
          <Text fontSize={{ base: "6xl", lg: "8xl" }} fontWeight="bold">1.5K+</Text>
          <Text>Language in the world</Text>
        </WrapItem>
        <WrapItem flexDir={"column"} alignItems={"center"}>
          <Text fontSize={{ base: "6xl", lg: "8xl" }} fontWeight="bold">1000+</Text>
          <Text>Total learners in the world</Text>
        </WrapItem>
      </Wrap>
    </Box>
  );
};