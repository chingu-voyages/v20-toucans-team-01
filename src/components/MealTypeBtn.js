import React from "react";
import { Button, Text } from "@chakra-ui/core";
import { css } from "@emotion/core";

export default function MealTypeBtn({ children, src }) {
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgSize="cover"
      boxSize={{ base: "40vw", md: "20vw" }}
      maxW={64}
      maxH={64}
      bg={`url("${src}") rgba(0, 0, 0, 0.4)`}
      bgBlendMode="multiply"
      color="white"
      fontFamily="aleo"
      fontSize={24}
      textShadow="rgba(0, 0, 0, 0.16) 0px 0.125rem 0.5rem"
      _hover={{ color: "black", background: "#E2E8F0" }}
    >
      {children}
    </Button>
  );
}
