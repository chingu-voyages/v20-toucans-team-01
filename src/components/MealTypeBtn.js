import React from "react";
import { Button } from "@chakra-ui/core";

export default function MealTypeBtn({ btnType, fluid, type, getTypeHandler }) {
  const isCurSel = type == btnType;
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgSize="cover"
      boxSize={{ base: "40vw", md: "20vw" }}
      maxW={64}
      maxH={64}
      bg={
        !isCurSel
          ? `url("${fluid.srcWebp}") rgba(0, 0, 0, 0.4)`
          : `url("${fluid.tracedSVG}")`
      }
      bgBlendMode="multiply"
      color={!isCurSel ? "white" : "black"}
      fontFamily="mono"
      fontSize={24}
      textShadow="rgba(0, 0, 0, 0.16) 0px 0.125rem 0.5rem"
      _hover={{ color: "black", background: `url("${fluid.tracedSVG}")` }}
      onClick={getTypeHandler(btnType)}
    >
      {btnType[0].toUpperCase() + btnType.substring(1)}
    </Button>
  );
}
