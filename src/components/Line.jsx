import React, { useEffect, useState } from 'react'

import SignOut from './SignOut'
import {auth, db} from "../firebase";
import SendMessage from './SendMessage';
import { Image } from '@chakra-ui/react';


function Line() {
    const [messages, setMessages] = useState([]);

    //stateのmessagesにfirebaseのdbを入れる
    useEffect(() => {
        //このmessagesはfirebaseのdatabaseのコレクション名
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })
    }, []);

    useEffect(() => {
        const scrollArea = document.getElementById('scroll')
        {console.log(scrollArea.scrollHeight)}
        if(scrollArea){
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    }, [messages])


    return (
        <div>
            <SignOut />
            <div className='msgs' id="scroll">
                {messages.map(({id, text, photoURL, uid}) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                            <Image src={photoURL} alt="" h={{base: "30px", md: "50px"}}/>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    )
}

export default Line