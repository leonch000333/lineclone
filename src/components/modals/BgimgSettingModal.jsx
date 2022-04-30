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

export const BgimgSettingModal = memo((props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8} textAlign="center">
          <Box mb={4} align="center">
            背景に適用しました。
          </Box>
          <Button onClick={onClose} colorScheme="red" variant={"outline"}>
            OK
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
