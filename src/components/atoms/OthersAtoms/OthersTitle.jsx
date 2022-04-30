import { Box } from "@chakra-ui/react";

export const OthersTitle = (props) => {
  const { children, fontColor, onClick } = props;
  return (
    <Box
      fontWeight="bold"
      fontSize={{ base: "18px", md: "24px" }}
      color={fontColor}
			onClick={onClick}
    >
      {children}
    </Box>
  );
};
