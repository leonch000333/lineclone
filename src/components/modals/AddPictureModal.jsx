import firebase from "firebase/compat/app";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { memo } from "react";

import { db, storage } from "../../firebase";

export const AddPictureModal = memo((props) => {
  const { isOpen, onClose } = props;

  const AddPhoto = () => {
    //写真を追加する
    let files = document.getElementById("file").files;
    let photo = files[0];

    let ref = storage.ref().child(photo.name);
    ref
      .put(photo)
      .then((snapshot) => {
        //storageに選択した画像を格納する
        const url = snapshot.ref.getDownloadURL();

        url.then((res) => {
          //dbに画像のUrlを格納する;
          db.collection("images").add({
            imageURL: res,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        });
      })
      .catch(() => alert("error"));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={8}>
          <input type="file" id="file" accept="image/png, image/jpeg" />
          <Button
            onClick={AddPhoto}
            id="up"
            mt={4}
            variant="outline"
            colorScheme="teal"
          >
            アップする
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
