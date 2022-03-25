import { CalendarIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import { memo } from "react";
import { DrawerTwoContents } from "../atoms/DrawerTwoContents";

export const DrawerTwo = memo(() => {
  return (
    <>
      {DrawerTwoContents.map((item) => (
        <Box>
          <Flex alignItems="center" justify="space-between">
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
