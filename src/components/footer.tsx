import React from "react";
import { Box, Text, Center, Divider } from "@chakra-ui/react";



export const Footer = () => {
    return (
        <Box>
            <Box display="flex" justifyContent={"space-between"} flexDir={{ base: "column", md: "row" }} mt="20">
                <Box>
                    <Text fontWeight={"bold"} fontSize="3xl" mb="12">VerbalizeIt</Text>
                    <Text fontSize="xl">It is a learning provider<br /> based in the UK that specialises<br /> in accrodited and bespoke training course</Text>
                </Box>
                <Box fontSize="xl">
                    <Box display="flex" flexDir={{ base: "column", md: "row" }} gap="20" mb="8">
                        <Text>
                            About Us
                        </Text>
                        <Text>
                            Terms&Conditions
                        </Text>
                        <Text>
                            Twitter
                        </Text>
                    </Box>
                    <Box display="flex" flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"} mb="8">
                        <Text>
                            Service
                        </Text>
                        <Text>
                            Privacy Policy
                        </Text>
                        <Text>
                            Facebook
                        </Text>
                    </Box>
                    <Box display="flex" flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"} mb="8">
                        <Text>
                            Blog
                        </Text>
                        <Text>
                            Become Partner
                        </Text>
                        <Text>
                            Instagram
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Divider border="1px solid black" mt={5} />
                <Center>
                    <Text my="10">Privacy | Terms & Conditions | Cookies Policy</Text>
                </Center>

            </Box>
        </Box>


    )
};