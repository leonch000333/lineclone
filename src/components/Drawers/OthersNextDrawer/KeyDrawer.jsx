import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Switch,
} from "@chakra-ui/react";
import { memo } from "react";

export const KeyDrawer = memo((props) => {
  const { isOpenKeyDrawer, onCloseKeyDrawer } = props;
  return (
    <Drawer
      isOpen={isOpenKeyDrawer}
      onClose={onCloseKeyDrawer}
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
              onClick={onCloseKeyDrawer}
              _hover={{ cursor: "pointer" }}
            />
            <p>暗号化キー</p>
            <CloseIcon
              onClick={onCloseKeyDrawer}
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody px="10%">
          <Box>
            <Box>
              このトークルームのテキストメッセージ(CLOVO,YouTube,音声検索・操作機能など、他のサービスを通して送受信したメッセージは除く)と位置情報は、Letter
              Sealingによって保護されています。
            </Box>
						<Link href="https://help.line.me" color="blue.400">Letter Sealingの詳細はこちら</Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
