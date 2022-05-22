import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Box,
  Divider,
  Switch,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";

import { GroupNameContext } from "../../providers/GroupNameProvider";
import { OthersSubtitle } from "../atoms/OthersAtoms/OthersSubtitle";
import { OthersTitle } from "../atoms/OthersAtoms/OthersTitle";
import { CashModal } from "../modals/CashModal";
import { TalkDeleteModal } from "../modals/TalkDeleteModal";
import { WithdrawalModal } from "../modals/WithdrawalModal";
import { DrawerHeaders } from "../organisms/DrawerHeaders";
import { OthersContents } from "../organisms/OthersOrganisms/OthersContents";
import { AutoFriendAddDrawer } from "./OthersNextDrawer/AutoFriendAddDrawer";
import { BackGroundImgDrawer } from "./OthersNextDrawer/BackGroundImgDrawer";
import { DeleteDataDrawer } from "./OthersNextDrawer/DeleteDataDrawer";
import { GroupDrawer } from "./OthersNextDrawer/GroupDrawer";
import { KeyDrawer } from "./OthersNextDrawer/KeyDrawer";
import { ReportDrawer } from "./OthersNextDrawer/ReportDrawer";

export const OthersDrawer = (props) => {
  const { isOpenOthersDrawer, onCloseOthersDrawer } = props;

  const { name, setName } = useContext(GroupNameContext);

  //GroupDrawer発火
  const {
    onClose: onCloseGroupDrawer,
    isOpen: isOpenGroupDrawer,
    onOpen: onOpenGroupDrawer,
  } = useDisclosure();

  //AutoFinendAddDrawer発火
  const {
    onClose: onCloseAutoFriendAddDrawer,
    isOpen: isOpenAutoFriendAddDrawer,
    onOpen: onOpenAutoFriendAddDrawer,
  } = useDisclosure();

  //BackGroundImgDrawer発火
  const {
    onClose: onCloseBackGroundImgDrawer,
    isOpen: isOpenBackGroundImgDrawer,
    onOpen: onOpenBackGroundImgDrawer,
  } = useDisclosure();

  //KeyDrawer発火
  const {
    onClose: onCloseKeyDrawer,
    isOpen: isOpenKeyDrawer,
    onOpen: onOpenKeyDrawer,
  } = useDisclosure();

  //DeleteDataDrawer発火
  const {
    onClose: onCloseDeleteDataDrawer,
    isOpen: isOpenDeleteDataDrawer,
    onOpen: onOpenDeleteDataDrawer,
  } = useDisclosure();

  //ReportDrawer発火
  const {
    onClose: onCloseReportDrawer,
    isOpen: isOpenReportDrawer,
    onOpen: onOpenReportDrawer,
  } = useDisclosure();

  //TalkDeleteModal発火
  const {
    onClose: onCloseTalkDeleteModal,
    isOpen: isOpenTalkDeleteModal,
    onOpen: onOpenTalkDeleteModal,
  } = useDisclosure();

  //CashModal発火
  const {
    onClose: onCloseCashModal,
    isOpen: isOpenCashModal,
    onOpen: onOpenCashModal,
  } = useDisclosure();

  //WithdrawalModal発火
  const {
    onClose: onCloseModal,
    isOpen: isOpenModal,
    onOpen: onOpenModal,
  } = useDisclosure();

  const lineMusic = () => window.open("https://music.line.me/about/", "_blank");

  return (
    <>
      <Drawer
        isOpen={isOpenOthersDrawer}
        onClose={onCloseOthersDrawer}
        placement="bottom"
        size="full"
        autoFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeaders onClick={onCloseOthersDrawer} children="その他" />
          <DrawerBody px="10%">
            <Box
              py={8}
              _hover={{ cursor: "pointer" }}
              onClick={onOpenGroupDrawer}
            >
              <span style={{ color: "#718096" }}>グループ名</span>
              <Flex alignItems="center" justify="space-between">
                <Box fontWeight="bold" fontSize={24}>
                  {name}
                </Box>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
            </Box>
            <Divider />
            <OthersContents>
              <Flex alignItems="center" justify="space-between">
                <OthersTitle>メンバーリスト・招待</OthersTitle>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
              <Flex
                onClick={onOpenAutoFriendAddDrawer}
                alignItems="center"
                justify="space-between"
                mt={4}
              >
                <OthersTitle>友達をグループに自動で追加</OthersTitle>
                <Flex alignItems="center">
                  <Box>オフ</Box>
                  <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
                </Flex>
              </Flex>
              <OthersSubtitle>
                招待した友だちはグループに自動で追加されます。グループに参加するか友だちに選んでもらうには、この設定をオフにします。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents>
              <Flex alignItems="center" justify="space-between">
                <OthersTitle>投稿の通知</OthersTitle>
                <Switch colorScheme="green" autoFocus="none" size="md" />
              </Flex>
              <OthersSubtitle>
                ノートへのリアクションやコメントの通知を受信します。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents onClick={lineMusic}>
              <Flex alignItems="center" justify="space-between">
                <OthersTitle>BGM</OthersTitle>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
              <OthersSubtitle>
                トークルームにBGMを設定します。設定したBGMは、すべてのメンバーのトークルームに反映されます。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents>
              <Text color="#718096" fontSize={{ base: "12px", md: "16px" }}>
                トーク設定
              </Text>
              <Flex
                onClick={onOpenBackGroundImgDrawer}
                alignItems="center"
                justify="space-between"
              >
                <OthersTitle>背景デザイン</OthersTitle>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
              <Box mt={4}>
                <OthersTitle>トーク履歴を送信</OthersTitle>
                <OthersSubtitle>
                  トーク内容をテキスト形式のファイルで送信します。
                </OthersSubtitle>
              </Box>
            </OthersContents>
            <Divider />
            <OthersContents onClick={onOpenKeyDrawer}>
              <Flex alignItems="center" justify="space-between">
                <OthersTitle>暗号化キー</OthersTitle>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
              <OthersSubtitle>
                このトークルームではLetter Sealingが適用されています。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents onClick={onOpenCashModal}>
              <OthersTitle fontColor="#f56565">
                アルバムのキャッシュをリセット
              </OthersTitle>
              <OthersSubtitle>
                アルバムや写真を読み込めない場合は、アルバムのキャッシュをリセットしてください。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents onClick={onOpenDeleteDataDrawer}>
              <Flex alignItems="center" justify="space-between">
                <OthersTitle>データを削除</OthersTitle>
                <ChevronRightIcon boxSize={{ base: "2rem", md: "2.5rem" }} />
              </Flex>
              <OthersSubtitle>
                データタイプや期間を選択してデータを削除します。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents onClick={onOpenTalkDeleteModal}>
              <OthersTitle fontColor="#f56565">
                トーク履歴をすべて削除
              </OthersTitle>
              <OthersSubtitle>
                このトークルームで送受信されたトーク履歴とデータ（アルバムとノートを除く）を削除します。
              </OthersSubtitle>
            </OthersContents>
            <Divider />
            <OthersContents>
              <OthersTitle onClick={onOpenReportDrawer}>通報</OthersTitle>
              <OthersTitle onClick={onOpenModal} fontColor="#f56565">
                グループを退会
              </OthersTitle>
            </OthersContents>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <GroupDrawer
        isOpenGroupDrawer={isOpenGroupDrawer}
        onCloseGroupDrawer={onCloseGroupDrawer}
      />
      <AutoFriendAddDrawer
        isOpenAutoFriendAddDrawer={isOpenAutoFriendAddDrawer}
        onCloseAutoFriendAddDrawer={onCloseAutoFriendAddDrawer}
      />
      <BackGroundImgDrawer
        isOpenBackGroundImgDrawer={isOpenBackGroundImgDrawer}
        onCloseBackGroundImgDrawer={onCloseBackGroundImgDrawer}
      />
      <KeyDrawer
        isOpenKeyDrawer={isOpenKeyDrawer}
        onCloseKeyDrawer={onCloseKeyDrawer}
      />
      <CashModal
        isOpenCashModal={isOpenCashModal}
        onCloseCashModal={onCloseCashModal}
      />
      <DeleteDataDrawer
        isOpenDeleteDataDrawer={isOpenDeleteDataDrawer}
        onCloseDeleteDataDrawer={onCloseDeleteDataDrawer}
      />
      <TalkDeleteModal
        isOpenTalkDeleteModal={isOpenTalkDeleteModal}
        onCloseTalkDeleteModal={onCloseTalkDeleteModal}
      />
      <ReportDrawer
        isOpenReportDrawer={isOpenReportDrawer}
        onCloseReportDrawer={onCloseReportDrawer}
      />
      <WithdrawalModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
    </>
  );
};
