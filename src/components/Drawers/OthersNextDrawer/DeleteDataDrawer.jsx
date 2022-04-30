import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { memo, useState } from "react";
import { DeleteDataModal } from "../../modals/DeleteDataModal";

export const DeleteDataDrawer = memo((props) => {
  const { isOpenDeleteDataDrawer, onCloseDeleteDataDrawer } = props;
  const {
    onOpen: onOpenDeleteDataModal,
    isOpen: isOpenDeleteDataModal,
    onClose: onCloseDeleteDataModal,
  } = useDisclosure();

  const [title, setTitle] = useState("すべて");

  const onClickMenu = (e) => setTitle(e.currentTarget.value);
  return (
    <>
      <Drawer
        isOpen={isOpenDeleteDataDrawer}
        onClose={onCloseDeleteDataDrawer}
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
                onClick={onCloseDeleteDataDrawer}
                _hover={{ cursor: "pointer" }}
              />
              <p>データを削除</p>
              <CloseIcon
                onClick={onCloseDeleteDataDrawer}
                _hover={{ cursor: "pointer" }}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody px="10%">
            <Box>
              <Flex
                w="100%"
                justify="space-between"
                _hover={{ cursor: "pointer" }}
              >
                <Text>削除の対象期間</Text>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronRightIcon />}>
                    {title}
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup>
                      <MenuItemOption onClick={onClickMenu} value="すべて">
                        すべて
                      </MenuItemOption>
                      <MenuItemOption onClick={onClickMenu} value="今日より前">
                        今日より前
                      </MenuItemOption>
                      <MenuItemOption
                        onClick={onClickMenu}
                        value="過去1週間より前"
                      >
                        過去1週間より前
                      </MenuItemOption>
                      <MenuItemOption
                        onClick={onClickMenu}
                        value="過去1カ月より前"
                      >
                        過去1カ月より前
                      </MenuItemOption>
                      <MenuItemOption
                        onClick={onClickMenu}
                        value="過去1年より前"
                      >
                        過去1年より前
                      </MenuItemOption>
                      <MenuItemOption>キャンセル</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Flex>
              <Box color="#718096">
                選択した期間のデータのみが削除されます。
              </Box>
            </Box>
            <Divider my={4} />
            <List spacing={6}>
              <ListItem>
                <Flex w="100%" alignItems="center" justify="space-between">
                  <Flex alignItem="center">
                    <Checkbox defaultChecked={true} />
                    <Text>写真</Text>
                  </Flex>
                  <Text color="#718096">0.0MB</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex w="100%" alignItems="center" justify="space-between">
                  <Flex alignItem="center">
                    <Checkbox defaultChecked={true} />
                    <Text>ボイスメッセージ</Text>
                  </Flex>
                  <Text color="#718096">0.0MB</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex w="100%" alignItems="center" justify="space-between">
                  <Flex alignItem="center">
                    <Checkbox defaultChecked={true} />
                    <Text>ファイル</Text>
                  </Flex>
                  <Text color="#718096">0.0MB</Text>
                </Flex>
              </ListItem>
            </List>
            <Box mt={6} color="#718096">
              このトークルームで送受信された写真（アルバムを除く）、ボイスメッセージ、ファイルのデータです。削除しないデータは
              選択を解除してください。保存期間が終了したデータを削除すると確認できなくなります。
            </Box>
            <Button onClick={onOpenDeleteDataModal} w="100%" mt="12%" colorScheme="red">
              選択したデータを削除
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <DeleteDataModal
        isOpenDeleteDataModal={isOpenDeleteDataModal}
        onCloseDeleteDataModal={onCloseDeleteDataModal}
      />
    </>
  );
});
