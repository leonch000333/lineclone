import { LockIcon, TriangleDownIcon, UnlockIcon } from "@chakra-ui/icons";
import { Box, DrawerContent } from "@chakra-ui/react";


export const DrawerFirstItems = (props) => {
	const {onClick, icon, text} = props
  return (
    <Box align="center" onClick={onClick} _hover={{ cursor: "pointer" }}>
      {icon}
      <Box fontSize="18px">{text}</Box>
    </Box>
  );
};
