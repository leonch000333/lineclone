import { Box } from "@chakra-ui/react";

export const OthersSubtitle = (props) => {
  const { children } = props;
  return (
    <Box
      fontSize={{ base: "12px", md: "16px" }}
      color="#718096"
    >
      {children}
    </Box>
  );
};