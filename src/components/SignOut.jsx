import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useContext } from "react";

import { auth } from "../firebase";
import { TalkDrawer } from "../components/Drawers/TalkDrawer";
import { GroupNameContext } from "../providers/GroupNameProvider";

function SignOut() {
  const { name, setName } = useContext(GroupNameContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      backgroundColor="#222a41"
      color="white"
      w="100%"
      h={{ base: "50px", md: "75px" }}
      justify="space-around"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      opacity="0.8"
    >
      <Button
        color="red"
        fontSize="15px"
        size="sm"
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
      <h3>{name}</h3>
      <Box>
        <PhoneIcon
          mx={4}
          boxSize={{ base: "1.5rem", md: "2.0rem" }}
          _hover={{ cursor: "pointer" }}
        />
        <HamburgerIcon
          onClick={onOpen}
          boxSize={{ base: "2rem", md: "2.5rem" }}
          _hover={{ cursor: "pointer" }}
        />
      </Box>
      <TalkDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
}

export default SignOut;
