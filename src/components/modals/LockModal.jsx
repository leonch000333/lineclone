import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import { memo, useContext } from "react";

import { DrawerContext } from "../../providers/DrawerProvider";

export const LockModal = memo((props) => {
  const { isOpenLockModal, onCloseLockModal } = props;

  const { lock } = useContext(DrawerContext);

  return (
    <Modal
      isOpen={isOpenLockModal}
      onClose={onCloseLockModal}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent backgroundColor="gray.700" borderRadius="10px">
        <ModalBody p={8}>
          <Box color="white" textAlign="center">
            {lock ? "通知オンにしました" : "通知オフにしました"}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
