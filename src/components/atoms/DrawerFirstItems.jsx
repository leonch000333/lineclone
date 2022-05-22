import { Box } from "@chakra-ui/react";

export const DrawerFirstItems = (props) => {
	const {onClick, icon, text} = props
  return (
    <Box align="center" onClick={onClick} _hover={{ cursor: "pointer" }}>
      {icon}
      <Box fontSize={{base: "14px", md: "18px"}}>{text}</Box>
    </Box>
  );
};
