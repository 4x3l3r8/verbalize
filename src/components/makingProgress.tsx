import React from "react";
import { Box, Text, } from "@chakra-ui/react";
import NextImage from "next/image";



export const MakingProgress = () => {
  return (
    <Box my={{ base: "10" }} w={"100%"}>
      <Box display="flex" flexDir={{ base: "column", lg: "row" }} textAlign={{ base: "center", lg: "start" }} justifyContent="space-between">
        <Text fontSize={{ base: "3xl", sm:"5xl", md: "6xl" }} fontWeight={"bold"}>
          Why you will love learning <br /> with VerbalizeIt
        </Text>
        <Text fontSize={{ md: "xl" }}> Reach your goals your whay with features  <br /> designed for the fastest, and most fun way to  learn a <br />langauge</Text>
      </Box>
      <Box display="flex" flexDir={{ base: "column", lg: "row" }} gap="20" mt="16">
        <Box w={{ lg: "50%" }} px={{ base: 16, lg: 0 }}>
          <NextImage
            height={"1000"}
            layout="responsive"
            width={1000}
            src="/makingp1.png"
            alt="alternative pictures"
          />
        </Box>
        <Box w={{ lg: "50%" }} px={{ base: 16, lg: 0 }}>
          <NextImage
            height={"1000"}
            layout="responsive"
            width={1000}
            src="/makingp2.png"
            alt="alternative pictures"
          />
        </Box>
      </Box>
    </Box >
  );
};