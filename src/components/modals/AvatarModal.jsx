import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  ModalCloseButton,
  Image,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { memo } from "react";

export const AvatarModal = memo((props) => {
  const { isOpenAvatarModal, onCloseAvatarModal } = props;

  return (
    <Modal
      isOpen={isOpenAvatarModal}
      onClose={onCloseAvatarModal}
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={8} textAlign="center">
          <Flex flexDirection="column" justify="center" alignItems="center">
            <Image
              w="60%"
              h="auto"
              src="https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_1280.png"
            />
            <Text>LINEアバター</Text>
          </Flex>
          <Text align="center" fontSize={{ base: "12px", md: "16px" }}>
            あなたのアバターを作成して、友だちと一緒に楽しもう！
          </Text>
          <Link
            href="https://guide.line.me/ja/account-and-settings/account-and-profile/avatar.html"
            color="blue.400"
            fontSize={{ base: "12px", md: "16px" }}
          >
            LINEアバターについて
          </Link>
					<Flex flexDirection="column" alignItems="center" mt={2}>
						<Button colorScheme="green" w="80%" mb={2}>自撮りで作成</Button>
						<Button w="80%">基本アバターから選択</Button>
					</Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
