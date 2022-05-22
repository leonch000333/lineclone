import { ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import { memo, useContext, useState } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";
import { GroupNameContext } from "../../providers/GroupNameProvider";

export const FiveContentsDrawer = memo((props) => {
  const { isOpenFiveDrawer, onCloseFiveDrawer } = props;

  const { name } = useContext(GroupNameContext);
  const { pageName, setPageName } = useContext(DrawerContext);

  const onClickNote = () => setPageName("note");
  const onClickAlbum = () => setPageName("album");
  const onClickPhoto = () => setPageName("photo");
  const onClickLink = () => setPageName("link");
  const onClickFile = () => setPageName("file");

  const pageSelect = () => {
    switch (pageName) {
      case "note":
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>ノートはありません</p>
            <span>大事な情報はノートを作成してシェアしよう。</span>
          </Flex>
        );
      case "album":
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>アルバムはありません</p>
            <span>大切な写真はアルバムを作成してシェアしよう。</span>
          </Flex>
        );
      case "photo":
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>写真はありません</p>
            <span>大切な写真はアルバムを作成してシェアしよう。</span>
          </Flex>
        );
      case "link":
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>リンクはありません</p>
            <span>トークルームで送信したリンクがここに表示されます。</span>
          </Flex>
        );
      case "file":
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>ファイルはありません</p>
            <span>トークルームで送信したファイルがここに表示されます。</span>
          </Flex>
        );
      default:
        return (
          <Flex justify="center" alignItems="center" flexDirection="column">
            <p>default</p>
          </Flex>
        );
    }
  };

  return (
    <Drawer
      isOpen={isOpenFiveDrawer}
      onClose={onCloseFiveDrawer}
      placement="bottom"
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
              onClick={onCloseFiveDrawer}
              _hover={{ cursor: "pointer" }}
            />
            <p>{name}</p>
            <CloseIcon
              onClick={onCloseFiveDrawer}
              _hover={{ cursor: "pointer" }}
            />
          </Flex>
          <List
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            mb={4}
            fontWeight="normal"
            fontSize={{base: "14px", md: "18px"}}
          >
            <ListItem
              onClick={onClickNote}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              ノート
            </ListItem>
            <ListItem
              onClick={onClickAlbum}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              アルバム
            </ListItem>
            <ListItem
              onClick={onClickPhoto}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              写真・動画
            </ListItem>
            <ListItem
              onClick={onClickLink}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              リンク
            </ListItem>
            <ListItem
              onClick={onClickFile}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              ファイル
            </ListItem>
          </List>
          <Input
            type="text"
            placeholder="テキスト、＠メンバー、＃ハッシュタグ"
            backgroundColor="gray.100"
          />
        </DrawerHeader>
        <DrawerBody px="10%" mt={150}>{pageSelect()}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
