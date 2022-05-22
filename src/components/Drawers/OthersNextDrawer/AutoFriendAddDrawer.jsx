import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Switch,
} from "@chakra-ui/react";
import { memo } from "react";

export const AutoFriendAddDrawer = memo((props) => {
  const { isOpenAutoFriendAddDrawer, onCloseAutoFriendAddDrawer } = props;
  return (
    <Drawer
      isOpen={isOpenAutoFriendAddDrawer}
      onClose={onCloseAutoFriendAddDrawer}
      placement="right"
      size="full"
      autoFocus={false}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader px="10%">
          <Flex justify="space-between" alignItems="center" mb={4}>
            <ChevronLeftIcon
              w={10}
              h={10}
              onClick={onCloseAutoFriendAddDrawer}
              _hover={{ cursor: "pointer" }}
            />
            <p>友だちをグループに自動で追加</p>
            <CloseIcon
              onClick={onCloseAutoFriendAddDrawer}
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody px="10%">
          <Box py={8} _hover={{ cursor: "pointer" }}>
            <Flex alignItems="center" justify="space-between" mt={4}>
              <Box fontWeight="bold" fontSize={24}>
                友達をグループに自動で追加
              </Box>
              <Flex alignItems="center">
                <Switch colorScheme="green" autoFocus="none" size="lg" />
              </Flex>
            </Flex>
            <Box>
              招待した友だちはグループに自動で追加されます。グループに参加するか友だちに選んでもらうには、この設定をオフにします。
            </Box>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
