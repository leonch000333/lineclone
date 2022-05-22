import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import { DrawerHeader, Flex, Text } from "@chakra-ui/react";

export const DrawerHeaders = (props) => {
  const { onClick, children, fontColor, bgColor } = props;
  return (
    <DrawerHeader px="10%" color={fontColor} backgroundColor={bgColor}>
      <Flex justify="space-between" alignItems="center" mb={4}>
        <ChevronLeftIcon
          boxSize={{ base: "2rem", md: "2.5rem" }}
          onClick={onClick}
          _hover={{ cursor: "pointer" }}
        />
        <Text fontSize={{base: "18px", md: "24px"}}>{children}</Text>
        <CloseIcon
          boxSize={{ base: "0.75rem", md: "1rem" }}
          onClick={onClick}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
    </DrawerHeader>
  );
};
