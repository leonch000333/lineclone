import { Input, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { AddIcon, ArrowRightIcon, LinkIcon, ViewIcon } from "@chakra-ui/icons";

import { db, auth, storage } from "../firebase";
import { AddPictureModal } from "./modals/AddPictureModal";
import { AddPhotoToLineDrawer } from "./Drawers/AddPhotoToLineDrawer";

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
        <div className="sendMessage">
          <AddIcon mr={6} _hover={{ cursor: "pointer" }} />
          <ViewIcon
            onClick={onOpenPhotoDrawer}
            mr={6}
            _hover={{ cursor: "pointer" }}
          />
          <LinkIcon onClick={onOpen} mr={6} _hover={{ cursor: "pointer" }} />
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
            }}
            bg="gray.100"
            placeholder="メッセージを入力してください"
            type="text"
            onChange={onChangeMessage}
            value={message}
          />
          <ArrowRightIcon style={{ color: "#7ac2ff", marginLeft: "20px" }} />
        </div>
      </form>
      <AddPictureModal onClose={onClose} isOpen={isOpen} />
      <AddPhotoToLineDrawer
        isOpenPhotoDrawer={isOpenPhotoDrawer}
        onClosePhotoDrawer={onClosePhotoDrawer}
      />
    </>
  );
}

export default SendMessage;
//formのonSubmitイベントは文字を入力してEnterキーを押したら発動
