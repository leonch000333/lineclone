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
} from "@chakra-ui/react";

export const MemberDrawer = (props) => {
  const { isOpenMemberDrawer, onCloseMemberDrawer } = props;

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
        <DrawerHeader px="10%">
          <Flex justify="space-between" alignItems="center" mb={4}>
            <CloseIcon onClick={onCloseMemberDrawer} _hover={{cursor: "pointer"}} />
            <p>メンバー</p>
            <Button display="block" variant="ghost">編集</Button>
          </Flex>
          <Input type="text" placeholder="名前で検索" backgroundColor="gray.100" />
        </DrawerHeader>
        <DrawerBody px="10%">

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};