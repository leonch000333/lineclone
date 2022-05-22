import { CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import { memo, useContext } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";
import { DrawerTwoContents } from "../atoms/DrawerTwoContents";

export const DrawerTwo = memo((props) => {
  const { onOpenTwoPhoto, onOpenTwoAlbum } = props;

  const { pageName } = useContext(DrawerContext);

  return (
    <>
      {DrawerTwoContents.map((item, index) => (
        <Box key={index.toString()}>
          <Flex
            onClick={index === 0 ? onOpenTwoPhoto : onOpenTwoAlbum}
            alignItems="center"
            justify="space-between"
            _hover={{ cursor: "pointer" }}
          >
            <Flex alignItems="center">
              <CalendarIcon mr={4} />
              {item.title}
            </Flex>
            <ChevronRightIcon w={10} h={10} />
          </Flex>
          <Flex
            fontSize="15px"
            color="gray.400"
            borderRadius="20px"
            w="100%"
            h="100px"
            px={6}
            textAlign="center"
            bg="gray.100"
            alignItems="center"
            justify="center"
          >
            <p>{item.text}</p>
          </Flex>
        </Box>
      ))}
    </>
  );
});
