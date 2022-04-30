import { Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { AddIcon, ArrowRightIcon, LinkIcon, ViewIcon } from "@chakra-ui/icons";

import { db, auth, storage } from "../firebase";
import { AddPictureModal } from "./modals/AddPictureModal";
import { AddPhotoToLineDrawer } from "./Drawers/AddPhotoToLineDrawer";
import { AddDrawer } from "./Drawers/AddDrawer";

function SendMessage() {
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState([]);

  //写真追加ModalのためのuseDisclosure
  const { onOpen, isOpen, onClose } = useDisclosure();

  //Lineで写真を送信するためのDrawerに対するuseDisclosure
  const {
    onClose: onClosePhotoDrawer,
    isOpen: isOpenPhotoDrawer,
    onOpen: onOpenPhotoDrawer,
  } = useDisclosure();

  //AddDrawer発火
  const {
    onClose: onCloseAddDrawer,
    isOpen: isOpenAddDrawer,
    onOpen: onOpenAddDrawer,
  } = useDisclosure();

  useEffect(() => {
    //このimagesはfirebaseのdatabaseのコレクション名
    db.collection("images")
      .limit(50)
      .onSnapshot((snapshot) => {
        setImageUrl(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const onChangeMessage = (e) => setMessage(e.target.value);

  const sendMessage = (e) => {
    //e.preventDefaultすることでEnterキーを押したときのデフォルトで起こるレンダリングを停止する。
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <Box className="sendMessage">
          <Flex justify="space-between" alignItems="center">
            <AddIcon
              mr={6}
              _hover={{ cursor: "pointer" }}
              onClick={onOpenAddDrawer}
            />
            <ViewIcon
              onClick={onOpenPhotoDrawer}
              mr={6}
              _hover={{ cursor: "pointer" }}
            />
            <LinkIcon onClick={onOpen} mr={6} _hover={{ cursor: "pointer" }} />
          </Flex>
          <Input
            w={{base: "60%", md: "85%"}}
            bg="gray.100"
            placeholder="メッセージを入力してください"
            type="text"
            onChange={onChangeMessage}
            value={message}
          />
          <ArrowRightIcon style={{ color: "#7ac2ff", marginLeft: "20px" }} />
        </Box>
      </form>
      <AddPictureModal onClose={onClose} isOpen={isOpen} />
      <AddPhotoToLineDrawer
        isOpenPhotoDrawer={isOpenPhotoDrawer}
        onClosePhotoDrawer={onClosePhotoDrawer}
      />
      <AddDrawer
        isOpenAddDrawer={isOpenAddDrawer}
        onCloseAddDrawer={onCloseAddDrawer}
      />
    </>
  );
}

export default SendMessage;
//formのonSubmitイベントは文字を入力してEnterキーを押したら発動
