import {
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { memo } from "react";

export const TalkDeleteModal = memo((props) => {
  const { isOpenTalkDeleteModal, onCloseTalkDeleteModal } = props;

  return (
    <Modal
      isOpen={isOpenTalkDeleteModal}
      onClose={onCloseTalkDeleteModal}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <Box mb={4} align="center">
            一度削除したトーク履歴は確認できません。
            <br />
            トーク履歴をすべて削除しますか？
          </Box>
          <Flex justify="space-between">
            <Button
              onClick={onCloseTalkDeleteModal}
              colorScheme="blue"
              variant={"outline"}
            >
              キャンセル
            </Button>
            <Button colorScheme="red" variant={"outline"}>
              削除
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
