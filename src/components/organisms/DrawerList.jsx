import {
  ChevronRightIcon,
  CalendarIcon,
  LinkIcon,
  SettingsIcon,
  CopyIcon,
  ChatIcon,
} from "@chakra-ui/icons";
import { Box, ListItem, List } from "@chakra-ui/react";
import { memo } from "react";
import { DrawerListItems } from "../atoms/DrawerListItems";

export const DrawerList = memo(() => {
  return (
    <List spacing={4} mb={8}>
      {DrawerListItems.map((item) => (
        <ListItem
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="20px"
          py={4}
          _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
        >
					<Box>
						{item.icon}
						{item.children}
					</Box>
					<ChevronRightIcon w={10} h={10} />
				</ListItem>
      ))}
    </List>
  );
});
