import React from "react";
import { Box, Flex, Spacer, Text} from "@chakra-ui/react";

function Footer() {
  return (
    <Flex m={"3.5% 1% 1% 1%"}>
      <Box>
        <Flex direction={"row"}>
          <Box pr={"14px"}><Text color = {"rgba(85, 85, 85, 1)"}>© CloudNation 2023</Text></Box>
          <Box pr={"14px"}><Text color = {"rgba(85, 85, 85, 1)"}>Support</Text></Box>
          <Box><Text color = {"rgba(85, 85, 85, 1)"}>Documentation</Text></Box>
        </Flex>
      </Box>
      <Spacer/>
      <Box>
        <Flex direction={"row"}>
          <Box pr={"14px"}><Text color = {"rgba(85, 85, 85, 1)"}>Privacy</Text></Box>
          <Box><Text color = {"rgba(85, 85, 85, 1)"}>Terms of Service</Text></Box>
        </Flex>
      </Box>
    </Flex>
  );
}
export default Footer;
