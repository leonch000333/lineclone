import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Box,
  useDisclosure,
  Stack,
  Button,
  Input,
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
        {/* <DrawerHeader px="10%">
          <Flex justify="space-between" alignItems="center" mb={4}>
            <CloseIcon
              onClick={onCloseMemberDrawer}
              _hover={{ cursor: "pointer" }}
            />
            <p>メンバー</p>
            <Button display="block" variant="ghost">
              編集
            </Button>
          </Flex>
          <Input
            type="text"
            placeholder="名前で検索"
            backgroundColor="gray.100"
          />
        </DrawerHeader> */}
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
