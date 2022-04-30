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

export const DeleteDataModal = memo((props) => {
  const { isOpenDeleteDataModal, onCloseDeleteDataModal } = props;

  return (
    <Modal
      isOpen={isOpenDeleteDataModal}
      onClose={onCloseDeleteDataModal}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <Box mb={4} align="center">
            選択したデータを全て削除します。
            <br />
            よろしいですか？
          </Box>
          <Flex justify="space-between">
            <Button
              onClick={onCloseDeleteDataModal}
              colorScheme="blue"
              variant={"outline"}
            >
              キャンセル
            </Button>
            <Button
              onClick={onCloseDeleteDataModal}
              colorScheme="red"
              variant={"outline"}
            >
              データの削除
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
