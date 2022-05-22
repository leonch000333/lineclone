import React, { useContext, useEffect, useState } from "react";

import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { DrawerContext } from "../providers/DrawerProvider";

function Line() {
  const [messages, setMessages] = useState([]);

  const { bgimg } = useContext(DrawerContext);

  //stateのmessagesにfirebaseのdbを入れる
  useEffect(() => {
    //このmessagesはfirebaseのdatabaseのコレクション名

    db.collection("messages")
      .orderBy("createdAt", "asc")
      .limit(200)
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            return {
              text: doc.data().text,
              photoURL: doc.data().photoURL,
              uid: doc.data().uid,
              createdAt: doc
                .data({ serverTimestamps: "estimate" })
                .createdAt.toDate(),
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <SignOut />
      <Flex
        className="msgs"
        id="scroll"
        bgColor="#93aad4"
        flexDirection="column"
        height="470px"
        overflow="auto"
        mt={{ base: "50px", md: "75px" }}
        bgImage={`url(${bgimg})`}
        backgroundSize="cover"
      >
        {messages.map(({ id, text, photoURL, uid, createdAt }, index) => (
          <Box key={index.toString()}>
            <Flex
              className={uid === auth.currentUser.uid ? "sent" : "received"}
              maxWidth="75%"
              p="15px"
              m="10px"
              borderRadius="100px"
              boxShadow="0 0 10px rgb(164,164, 164)"
              alignItems="center"
            >
              <Image
                borderRadius="50%"
                src={photoURL}
                alt=""
                h={{ base: "30px", md: "50px" }}
              />
              <Text
                maxWidth={{ base: "80%", md: "85%" }}
                textAlign="left"
                px="10px"
              >
                {text}
              </Text>
              <Text fontSize={{ base: "12px", md: "18px" }}>
                {`${createdAt.getHours()}:${createdAt
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
      <SendMessage />
    </div>
  );
}

export default Line;
