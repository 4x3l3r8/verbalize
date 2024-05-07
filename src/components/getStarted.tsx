import { Box, Img, Text, Image, Input, Button, AvatarGroup, Avatar, VStack, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import Mobile from "../assets/images/mobile.png";


export const GetStarted = () => {
  return (
    <>
      <Box display="flex" flexDir={{ base: "column", lg: "row" }} gap="20" w={"100%"} mt={20} justifyContent={"space-between"}>
        <VStack alignItems={"start"} textAlign={{ base: "center", lg: "start" }} justifyContent={"center"} width={{ base: "100%", lg: "40%" }} >
          <Text fontSize={{ base: "5xl", md: "7xl" }} fontWeight="800">We make you learn language easily!</Text>
          <Text fontSize={{ md: "2xl" }} mb="8">
            We help you learn langauage easily. with the easy lessons, you will
            earns points and unlock new levels while to improving the real world
            communications.
          </Text>
          <Box display="flex" flexDir={{ base: "column", md: "row" }} alignItems={"center"} gap="2" w={"100%"}>
            <Input placeholder="Enter your email" bg="#F5F5F5" rounded="full" p={8} size={"lg"} />
            <Button h={{ base: "12", md: "16" }} w={{ base: "fit-content", md: "initial" }} color={"black"} px={8} rounded={"full"}>
              Get Started
            </Button>
          </Box>
        </VStack>
        <Box as={Flex} justifyContent={"center"} alignItems={"center"} w={{ lg: "50%" }} px={{ base: 16, lg: 0 }}>
          <NextImage
            width={1400}
            height={1400}
            layout="responsive"
            src="/mobile.png"
            alt="alternative pictures"
          />
        </Box>
      </Box>
      <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={{ base: 7, lg: 0 }} justifyContent="space-between" my={16}>
        <HStack justifyContent={{ base: "center", md: "start" }}>
          <AvatarGroup size='md' max={5}>
            <Avatar name='Daniel Adesanya' src='https://github.com/4x3l3r8.png' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
          </AvatarGroup>
          <Text> Students Inroll</Text>
        </HStack>
        <Box>
          <NextImage
            height={"100"}
            width={700}
            src="/logo.png"
            alt="alternative pictures"
          />
        </Box>
      </Box>
    </>

  );
};