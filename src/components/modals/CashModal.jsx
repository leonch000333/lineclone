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

export const CashModal = memo((props) => {
  const { isOpenCashModal, onCloseCashModal } = props;

  return (
    <Modal
      isOpen={isOpenCashModal}
      onClose={onCloseCashModal}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <Box mb={4} align="center">
            アルバムのキャッシュをリセットしますか？
          </Box>
          <Flex justify="space-between">
            <Button
              onClick={onCloseCashModal}
              colorScheme="blue"
              variant={"outline"}
            >
              キャンセル
            </Button>
            <Button
              onClick={onCloseCashModal}
              colorScheme="red"
              variant={"outline"}
            >
              リセット
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
