/* eslint-disable react/prop-types */
import React from "react";
import { Box, Button, Flex, Heading, Spacer, Text} from "@chakra-ui/react";

function Feature({ title, desc, logo, buttonText, bg }) {
  const logoSource = `../assets/${logo}`;
  return (
    <Box p={5} shadow='md' borderWidth='1px' minHeight="320px" borderRadius="18px" backgroundColor={bg} flexDirection={"column"} position="relative">
      <Flex paddingBottom={"6px"} borderBottom='0.5px dashed #555555'>
        <Box>
          <Heading fontSize='xl'>{title}</Heading>
        </Box>
        <Spacer />
        <Box><img src={logoSource}/></Box>
      </Flex>
      <Flex><Text mt={4} color = {"rgba(85, 85, 85, 1)"}>{desc}</Text></Flex>
      <Flex position={"absolute"} bottom={"20px"} right={"16px"}><Button colorScheme='purple'>{buttonText}</Button></Flex>
    </Box>
  );
}
export default Feature;
