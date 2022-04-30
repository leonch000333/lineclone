import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, ListItem, List } from "@chakra-ui/react";
import { memo, useContext } from "react";
import { DrawerContext } from "../../providers/DrawerProvider";

import { DrawerListItems } from "../atoms/DrawerListItems";

export const DrawerList = memo((props) => {
  const { onOpenFiveDrawer, onOpenOthersDrawer, onOpenCalendarDrawer } = props;

  const { setPageName } = useContext(DrawerContext);

  const onClickFiveDrawer = (index) => {
    index === 0
      ? setPageName("note")
      : index === 2
      ? setPageName("link")
      : index === 3
      ? setPageName("file")
      : setPageName("");
    onOpenFiveDrawer();
  };

  return (
    <List spacing={4} mb={8}>
      {DrawerListItems.map((item, index) => (
        <ListItem
          onClick={
            index === 0 || index === 2 || index === 3
              ? () => onClickFiveDrawer(index)
              : index === 1
              ? onOpenCalendarDrawer
              : onOpenOthersDrawer
          }
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="20px"
          py={4}
          key={index.toString()}
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
