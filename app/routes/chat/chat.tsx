import React, { useState, useEffect } from "react";
import Container from "~/components/container/Container";
import SendArrow from "~/src/assets/icon/chat/SendArrow";
import classNames from "~/utils/classNames";
interface Message {
  sender: string;
  text: string;
  self: boolean;
}
interface Conversation {
  header: string;
  messages: Message[];
}

const ChatItemContent = ({
  id,
  selectedConversationId,
  setSelectedConversationId,
}: {
  id: number;
  selectedConversationId: number | null;
  setSelectedConversationId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}) => (
  <div
    key={id}
    className={`chat__item ${
      selectedConversationId === id ? "chat__item--selected" : ""
    }`}
    data-conversation-id={id}
    onClick={() => setSelectedConversationId(id)}
  >
    <div className="chat__item-content">
      <div className="chat__item-content-container">
        <div className="chat__item-sender-img">
          <img src="app\src\assets\img\chat\dummyChatProfil.png" alt="sender-img" />
        </div>
        <div className="chat__item-maincontent">
          <div className="chat__item-sender-name">
            <h3>John Doe</h3>
          </div>
          <div className="chat__item-preview">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit
              dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.
            </p>
          </div>
        </div>
      </div>
      <div className="chat__item-date">
        <p>12/12/2020</p>
      </div>
    </div>
  </div>
);

const Chat = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<
    number | null
  >(null);
  const [conversationContent, setConversationContent] =
    useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    if (selectedConversationId) {
      loadConversation(selectedConversationId);
    }
  }, [selectedConversationId]);

  useEffect(() => {
    const chatContainer = document.querySelector(".conversation-chats");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [conversationContent]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedConversationId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const loadConversation = (conversationId: number) => {
    console.log(`Loading conversation with ID: ${conversationId}`);
    setConversationContent({
      header: "John Doe",
      messages: [
        { sender: "John Doe", text: "Hello, how are you?", self: false },
        { sender: "You", text: "I'm good, thanks! How about you?", self: true },
        { sender: "John Doe", text: "I'm doing well, thank you.", self: false },
      ],
    });
  };

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setConversationContent((prevContent) => {
        if (!prevContent) return null;
        return {
          ...prevContent,
          messages: [
            ...prevContent.messages,
            { sender: "You", text: newMessage, self: true },
          ],
        };
      });
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div className="chat__content">
        {[1, 2, 3, 4, 5].map((id) => (
          <ChatItemContent
            key={id}
            id={id}
            selectedConversationId={selectedConversationId}
            setSelectedConversationId={setSelectedConversationId}
          />
        ))}
      </div>
      <div
        className={classNames("conversation-tab", {
          "conversation-tab--visible": !!selectedConversationId,
        })}
      >
        <Container>
          {conversationContent && (
            <div className="conversation-content">
              <div className="conversation-header">
                <h3>{conversationContent.header}</h3>
                <button
                  className="close-btn"
                  onClick={() => setSelectedConversationId(null)}
                >
                  &times;
                </button>
              </div>
              <div className="conversation-chats">
                {conversationContent.messages
                  .map((msg: any, index: number) => (
                    <div
                      key={index}
                      className={`conversation-chat ${
                        msg.self
                          ? "conversation-chat--self"
                          : "conversation-chat--other"
                      }`}
                    >
                      <div className="conversation-chat-content">
                        <p>
                          <strong>{msg.sender}:</strong> {msg.text}
                        </p>
                      </div>
                    </div>
                  ))
                  .reverse()}
              </div>
              <div className="conversation-input">
                <input
                  type="text"
                  placeholder="Envoyez un message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={sendMessage}><SendArrow /></button>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Chat;
