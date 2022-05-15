import React, {useEffect, useState} from 'react'
import PageWrapper from 'components/layouts/PageWrapper'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const ChatRoom = () => {
    const [stompClient, setStompClient] = useState<any>(null)

    useEffect(() => {
        var socket = new SockJS('/ws');
        setStompClient(Stomp.over(socket))
    }, [])

    const setUsername = () => {
        stompClient.connect({},
            onConnected,
            () => {});
    }

    const onMessageReceived = () => {
    }

    const onConnected = () => {
        // Subscribe to the Public Topic
        stompClient.subscribe('/topic/public', onMessageReceived);

        // Tell your username to the server
        stompClient.send("/app/chat.addUser",
            {},
            JSON.stringify({sender: 'username test', type: 'JOIN'})
        )
    }

    const sendMessage = () => {
        const content = "some content"

        stompClient.send("/chat.sendMessage",
            {},
            JSON.stringify({sender: 'username test', type: 'CHAT', content: content})
        )
    }



    return (
        <PageWrapper>
            <button onClick={setUsername}>
                set username
            </button>
            <button onClick={sendMessage}>
                send some message
            </button>
        </PageWrapper>
    )
}

export default ChatRoom
