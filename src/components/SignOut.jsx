import { HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useState } from "react";

import { auth } from "../firebase";
import { TalkDrawer } from "../components/Drawers/TalkDrawer";
import { GroupNameContext } from "../providers/GroupNameProvider";

function SignOut() {
  const { name, setName } = useContext(GroupNameContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex className="header" h={{base: "50px", md: "75px"}} justify="space-around" alignItems="center">
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
        <PhoneIcon mx={4}/>
        <HamburgerIcon onClick={onOpen} _hover={{ cursor: "pointer" }} />
      </Box>
      <TalkDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
}

export default SignOut;
