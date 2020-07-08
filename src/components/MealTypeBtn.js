import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function MealTypeBtn({ children }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgSize="contain"
      boxSize={{ base: "13rem", md: "10rem" }}
      bgImage="url('https://www.themealdb.com/images/media/meals/1544384070.jpg')"
    >
      <Text
        color="white"
        fontFamily="aleo"
        fontSize={24}
        textShadow="rgba(0, 0, 0, 0.16) 0px 0.125rem 0.5rem"
      >
        {children}
      </Text>
    </Box>
  );
}
