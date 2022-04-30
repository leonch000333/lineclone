import React, { useContext, useEffect, useState } from "react";

import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import { Box, Image } from "@chakra-ui/react";
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
        setMessages(snapshot.docs.map((doc) => {
          return{
            text: doc.data().text,
            photoURL: doc.data().photoURL,
            uid: doc.data().uid,
            createdAt: doc.data({serverTimestamps: "estimate"}).createdAt.toDate()
          }
        }));
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
      <Box
        className="msgs"
        id="scroll"
        mt={{base: "50px", md: "75px"}}
        bgImage={`url(${bgimg})`}
        backgroundSize="cover"
        // style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }}
      >
        {messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <Image
                borderRadius="50%"
                src={photoURL}
                alt=""
                h={{ base: "30px", md: "50px" }}
              />
              <p className="line-text">{text}</p>
              <span>
                {`${createdAt.getHours()}:${createdAt
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
              </span>
            </div>
          </div>
        ))}
      </Box>
      <SendMessage />
    </div>
  );
}

export default Line;
