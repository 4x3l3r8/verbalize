"use client"

import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { MobileNav } from "./MobileNav";



export const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #B0B0B0"
      py="4"
    >
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"}>VerbalizeIt</Text>
      </Box>
      <Flex display={{ base: "none", md: "flex" }} gap="10" fontSize={"lg"}>
        <Link href={"#"} fontWeight={"normal"}>Service</Link>
        <Link href={"#"} fontWeight={"normal"}>Blog</Link>
        <Link href={"#"} fontWeight={"normal"}>About Us</Link>
        <Link href={"#"} fontWeight={"normal"}>Contact</Link>
      </Flex>
      <Button display={{ base: "none", md: "flex" }} rounded="3xl" size={"lg"} px={8} color={"black"}>Register</Button>
      <MobileNav />
    </Flex>
  );
};