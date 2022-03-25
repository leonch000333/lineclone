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
import { useContext } from "react";

import { auth } from "../../firebase";
import { DrawerContext } from "../../providers/DrawerProvider";
import { DrawerFirstItems } from "../atoms/DrawerFirstItems";
import { DrawerTwoContents } from "../atoms/DrawerTwoContents";
import { WithdrawalModal } from "../modals/WithdrawalModal";
import { DrawerList } from "../organisms/DrawerList";
import { DrawerTwo } from "../organisms/DrawerTwo";
import { InvitationDrawer } from "./invitationDrawer";
import { MemberDrawer } from "./MemberDrawer";

export const TalkDrawer = (props) => {
  //Drawerの設定をpropsとして受け取る。
  const { onClose, isOpen } = props;

  //globalなstateを使用
  const { notification, onClickLock } = useContext(DrawerContext);

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

  //invitationのDrawer発火
  const {
    onClose: onCloseInvitationDrawer,
    isOpen: isOpenInvitationDrawer,
    onOpen: onOpenInvitationDrawer,
  } = useDisclosure();

  const lineMusic = () => window.open("https://music.line.me/about/", "_blank");

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
          <DrawerCloseButton left="150px" top="30px" />
          <DrawerHeader align="center">
            {auth.currentUser.displayName}
          </DrawerHeader>
          <DrawerBody px="10%" fontSize="25px">
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
                  <Box fontSize="18px">
                    {notification ? "通知オフ" : "通知オン"}
                  </Box>
                </Box>
                <DrawerFirstItems onClick={onOpenMemberDrawer} icon={<TriangleDownIcon w={10} h={10} color="gray.400" />} text="メンバー" />
                <DrawerFirstItems onClick={onOpenInvitationDrawer} icon={<AddIcon w={10} h={10} color="gray.400" />} text="招待" />
                <DrawerFirstItems onClick={onOpenModal} icon={<WarningTwoIcon w={10} h={10} color="gray.400" />} text="退会" />
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
                <DrawerTwo />
              </Stack>
              <DrawerList />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <WithdrawalModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
      <MemberDrawer isOpenMemberDrawer={isOpenMemberDrawer} onCloseMemberDrawer={onCloseMemberDrawer} />
      <InvitationDrawer isOpenInvitationDrawer={isOpenInvitationDrawer} onCloseInvitationDrawer={onCloseInvitationDrawer} />
    </>
  );
};
