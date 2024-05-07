"use client"

import React from "react";
import { Box, Button, Text, Image, Icon, Center, chakra, Flex } from "@chakra-ui/react";
import NextImage from "next/image";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const Apple = chakra(FaApple)
const Google = chakra(FaGooglePlay)

export const Learn = () => {
    return (
        <Box bg="#FFCE31">
            <Center flexDir={"column"}>
                <Text fontSize={{ base: "2xl", md: "5xl", lg: "8xl" }} fontWeight="bold" mt="40">Learn a new language for<br /> free download app Now!</Text>
                <Box>
                </Box>

                <Flex mb="110" flexDir={{ base: "column", md: "row" }} gap={4}>
                    <Button colorScheme="blackAlpha" rounded={"full"} bg={"black"} display="flex" p="40px" >
                        <Apple color="white" fontSize="5xl" />
                        <Box>
                            <Text color="gray.500" fontWeight={"normal"}>Download on the</Text>
                            <Text fontSize="3xl" color="white"> App Store</Text>
                        </Box>

                    </Button>
                    <Button colorScheme="blackAlpha" rounded={"full"} bg={"black"} display="flex" p="40px" >
                        <Google color="white" fontSize="5xl" />
                        <Box textAlign={"start"}>
                            <Text color="gray.500" fontWeight={"normal"}>GET IT ON</Text>
                            <Text fontSize="3xl" color="white">Google Play</Text>
                        </Box>

                    </Button>
                </Flex>
            </Center>

        </Box>
    )
};