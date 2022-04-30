import {
  LockIcon,
  AddIcon,
  TriangleDownIcon,
  UnlockIcon,
  WarningTwoIcon,
  StarIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { memo, useContext, useState } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";
import { GroupNameContext } from "../../providers/GroupNameProvider";
import { DrawerFirstItems } from "../atoms/DrawerFirstItems";
import { LockModal } from "../modals/LockModal";
import { WithdrawalModal } from "../modals/WithdrawalModal";
import { DrawerHeaders } from "../organisms/DrawerHeaders";
import { DrawerList } from "../organisms/DrawerList";
import { DrawerTwo } from "../organisms/DrawerTwo";
import { CalendarDrawer } from "./Calendar/CalendarDrawer";
import { FiveContentsDrawer } from "./FiveContentsDrawer";
import { InvitationDrawer } from "./invitationDrawer";
import { MemberDrawer } from "./MemberDrawer";
import { OthersDrawer } from "./OthersDrawer";

export const TalkDrawer = memo((props) => {
  //Drawerの設定をpropsとして受け取る。
  const { onClose, isOpen } = props;

  const { lock, setLock, pageName, setPageName } = useContext(DrawerContext);
  const { name } = useContext(GroupNameContext);

  const [notification, setNotification] = useState(true);
  const onClickLock = () => {
    setNotification(!notification);
    setLock(!lock);
    onOpenLockModal();
  };

  //Modalの設定をuseDisclosureで受け取る
  const {
    onClose: onCloseModal,
    isOpen: isOpenModal,
    onOpen: onOpenModal,
  } = useDisclosure();

  //memberのDrawer発火
  const {
    onClose: onCloseMemberDrawer,
    isOpen: isOpenMemberDrawer,
    onOpen: onOpenMemberDrawer,
  } = useDisclosure();

  //LockのDrawer発火
  const {
    onClose: onCloseLockModal,
    isOpen: isOpenLockModal,
    onOpen: onOpenLockModal,
  } = useDisclosure();

  //invitationのDrawer発火
  const {
    onClose: onCloseInvitationDrawer,
    isOpen: isOpenInvitationDrawer,
    onOpen: onOpenInvitationDrawer,
  } = useDisclosure();

  //fiveDrawerのDrawer発火
  const {
    onClose: onCloseFiveDrawer,
    isOpen: isOpenFiveDrawer,
    onOpen: onOpenFiveDrawer,
  } = useDisclosure();

  //CalendarDrawer発火
  const {
    onClose: onCloseCalendarDrawer,
    isOpen: isOpenCalendarDrawer,
    onOpen: onOpenCalendarDrawer,
  } = useDisclosure();

  //その他ののDrawer発火
  const {
    onClose: onCloseOthersDrawer,
    isOpen: isOpenOthersDrawer,
    onOpen: onOpenOthersDrawer,
  } = useDisclosure();

  const lineMusic = () => window.open("https://music.line.me/about/", "_blank");

  const onOpenTwoPhoto = () => {
    setPageName("photo");
    onOpenFiveDrawer();
  };

  const onOpenTwoAlbum = () => {
    setPageName("album");
    onOpenFiveDrawer();
  };

  return (
    <>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        placement="right"
        autoFocus={false}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders onClick={onClose} children={name} />
          <DrawerBody px="10%" fontSize={{ base: "18px", md: "25px" }}>
            <Box>
              <Flex direction={"row"} justify="space-between" my={8}>
                <Box
                  onClick={onClickLock}
                  align="center"
                  _hover={{ cursor: "pointer" }}
                >
                  {notification ? (
                    <UnlockIcon w={10} h={10} color="gray.400" />
                  ) : (
                    <LockIcon w={10} h={10} color="gray.400" />
                  )}
                  <Box fontSize={{ base: "14px", md: "18px" }}>
                    {notification ? "通知オフ" : "通知オン"}
                  </Box>
                </Box>
                <DrawerFirstItems
                  onClick={onOpenMemberDrawer}
                  icon={<TriangleDownIcon w={10} h={10} color="gray.400" />}
                  text="メンバー"
                />
                <DrawerFirstItems
                  onClick={onOpenInvitationDrawer}
                  icon={<AddIcon w={10} h={10} color="gray.400" />}
                  text="招待"
                />
                <DrawerFirstItems
                  onClick={onOpenModal}
                  icon={<WarningTwoIcon w={10} h={10} color="gray.400" />}
                  text="退会"
                />
              </Flex>
              <Divider />
              <Stack pb={8} spacing={8}>
                <Flex
                  alignItems="center"
                  justify="space-between"
                  borderRadius="20px"
                  py={8}
                  onClick={lineMusic}
                  _hover={{ cursor: "pointer", backgroundColor: "gray.100" }}
                >
                  <Flex alignItems="center">
                    <StarIcon mr={4} />
                    BGM
                  </Flex>
                  <Flex alignItems="center">
                    <Box overflow="hidden">
                      <p className="bgm">BGMを設定しよう!</p>
                    </Box>
                    <ChevronRightIcon w={10} h={10} />
                  </Flex>
                </Flex>
                <DrawerTwo
                  onOpenTwoPhoto={onOpenTwoPhoto}
                  onOpenTwoAlbum={onOpenTwoAlbum}
                />
              </Stack>
              <DrawerList
                onOpenFiveDrawer={onOpenFiveDrawer}
                onOpenOthersDrawer={onOpenOthersDrawer}
                onOpenCalendarDrawer={onOpenCalendarDrawer}
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <LockModal
        isOpenLockModal={isOpenLockModal}
        onCloseLockModal={onCloseLockModal}
      />
      <WithdrawalModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
      <MemberDrawer
        isOpenMemberDrawer={isOpenMemberDrawer}
        onCloseMemberDrawer={onCloseMemberDrawer}
      />
      <InvitationDrawer
        isOpenInvitationDrawer={isOpenInvitationDrawer}
        onCloseInvitationDrawer={onCloseInvitationDrawer}
      />
      <FiveContentsDrawer
        isOpenFiveDrawer={isOpenFiveDrawer}
        onCloseFiveDrawer={onCloseFiveDrawer}
      />
      <OthersDrawer
        isOpenOthersDrawer={isOpenOthersDrawer}
        onCloseOthersDrawer={onCloseOthersDrawer}
      />
      <CalendarDrawer
        isOpenCalendarDrawer={isOpenCalendarDrawer}
        onCloseCalendarDrawer={onCloseCalendarDrawer}
      />
    </>
  );
});
