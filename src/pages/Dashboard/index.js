/* eslint-disable sort-imports */
/* eslint-disable react/prop-types */
import React from "react";
import { dashboardConfig } from "Configs/dashboard";
import { Box, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import Feature from "components/Feature";

function Dashboard() {
  return (
    <Box margin="2% 4% 2% 4%">
      <Flex direction={"column"}>
        <Heading fontSize='4xl'>Get Started</Heading>
        <Text mt={"2px"} color = {"rgba(85, 85, 85, 1)"}>Choose what you want to deploy and we&apos;ll get it done in seconds</Text>
      </Flex>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        gap={4}
        mt={"1%"}
      >
        {dashboardConfig.map((gridItem) => (
          <GridItem key={gridItem.title} colSpan={gridItem.colSpan}>
            <Feature
              bg={gridItem.background}
              title={gridItem.title}
              desc={gridItem.desc}
              logo={gridItem.logo}
              buttonText={gridItem.buttonText}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Dashboard;
