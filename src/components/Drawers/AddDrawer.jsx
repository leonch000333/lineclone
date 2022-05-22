import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Box,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";

import { AddLists } from "../atoms/AddLists";
import { AvatarModal } from "../modals/AvatarModal";
import { DateSettingDrawer } from "./DateSettingDrawer";
import { VoteDrawer } from "./VoteDrawer/VoteDrawer";

export const AddDrawer = memo((props) => {
  const { isOpenAddDrawer, onCloseAddDrawer } = props;

  //AvatarModal発火
  const {
    onOpen: onOpenAvatarModal,
    isOpen: isOpenAvatarModal,
    onClose: onCloseAvatarModal,
  } = useDisclosure();

  //VoteDrawer発火
  const {
    onOpen: onOpenVoteDrawer,
    isOpen: isOpenVoteDrawer,
    onClose: onCloseVoteDrawer,
  } = useDisclosure();

  //DateSettingDrawer発火
  const {
    onOpen: onOpenDateSettingDrawer,
    isOpen: isOpenDateSettingDrawer,
    onClose: onCloseDateSettingDrawer,
  } = useDisclosure();

  return (
    <>
      <Drawer
        isOpen={isOpenAddDrawer}
        onClose={onCloseAddDrawer}
        placement="left"
        size="md"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody px="10%">
            <Flex wrap="wrap" pt={8}>
              {AddLists.map((item, index) => (
                <Flex
                  onClick={
                    index === 7
                      ? onOpenAvatarModal
                      : index === 9
                      ? onOpenVoteDrawer
                      : index === 10
                      ? onOpenDateSettingDrawer
                      : item.click
                  }
                  key={index.toString()}
                  w="33%"
                  flexDirection="column"
                  alignItems="center"
                  py={4}
                  my={4}
                  _hover={{ cursor: "pointer" }}
                >
                  {item.icon}
                  <Box>{item.children}</Box>
                </Flex>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <AvatarModal
        isOpenAvatarModal={isOpenAvatarModal}
        onCloseAvatarModal={onCloseAvatarModal}
      />
      <VoteDrawer
        isOpenVoteDrawer={isOpenVoteDrawer}
        onCloseVoteDrawer={onCloseVoteDrawer}
      />
      <DateSettingDrawer
        isOpenDateSettingDrawer={isOpenDateSettingDrawer}
        onCloseDateSettingDrawer={onCloseDateSettingDrawer}
      />
    </>
  );
});
