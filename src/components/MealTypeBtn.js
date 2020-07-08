import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function MealTypeBtn({ children, src }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgSize="cover"
      boxSize={{ base: "40vw", md: "20vw" }}
      maxW={64}
      maxH={64}
      bg={`url("${src}") rgba(0, 0, 0, 0.4)`}
      bgBlendMode="multiply"
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
