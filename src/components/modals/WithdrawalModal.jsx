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



export const WithdrawalModal = memo((props) => {
	const {isOpenModal, onCloseModal} = props

  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <Box mb={4} align="center">
            グループを退会すると、グループメンバーリストとグループトークの履歴がすべて削除されます。
            グループを退会しますか？
          </Box>
          <Flex justify="space-between">
            <Button
              onClick={onCloseModal}
              colorScheme="blue"
              variant={"outline"}
            >
              キャンセル
            </Button>
            <Button colorScheme="red" variant={"outline"}>
              退会
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
