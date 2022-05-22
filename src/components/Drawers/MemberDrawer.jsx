import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  List,
  ListItem,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { memo, useContext } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";
import { DrawerHeaders } from "../organisms/DrawerHeaders";

export const MemberDrawer = memo((props) => {
  const { isOpenMemberDrawer, onCloseMemberDrawer } = props;

  const {users, setUsers} = useContext(DrawerContext)

  return (
    <Drawer
      isOpen={isOpenMemberDrawer}
      onClose={onCloseMemberDrawer}
      placement="bottom"
      size="full"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeaders onClick={onCloseMemberDrawer} children="メンバー" />
        <DrawerBody px="10%">
          <List spacing={4}>
            {users.map((user, index) => (
              <ListItem
                key={index.toString()}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{ cursor: "pointer" }}
              >
                <Flex pointerEvents="none" alignItems="center">
                  <Image
                    src="https://source.unsplash.com/random"
                    boxSize={8}
                    mr={4}
                    borderRadius="50%"
                  />
                  {user.name}
                </Flex>
                <Checkbox />
              </ListItem>
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
