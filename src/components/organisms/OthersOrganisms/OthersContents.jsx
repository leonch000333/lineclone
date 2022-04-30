import { Box } from "@chakra-ui/react";

export const OthersContents = (props) => {
  const { children, onClick } = props;
  return (
    <Box py={8} onClick={onClick} _hover={{ cursor: "pointer" }}>
      {children}
    </Box>
  );
};
