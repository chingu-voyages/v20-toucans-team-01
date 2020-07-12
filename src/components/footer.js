import React from "react";
import { Center, Text, Link } from "@chakra-ui/core";

export default function Footer() {
  return (
    <Center as="footer" marginY={4} paddingX={2}>
      <Text textAlign="center" overflowWrap="break-word">
        © 2020 Copyright{" "}
        <Link
          isExternal
          href="https://github.com/chingu-voyages/v20-toucans-team-01"
          color="facebook.500"
        >
          Voyage 20 Toucans Team 01
        </Link>
      </Text>
    </Center>
  );
}
