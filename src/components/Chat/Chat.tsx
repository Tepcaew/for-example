import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMessages, getMessages } from "../../features/ChatSlice";
import { getUserById } from "../../features/applicationSlice";

const socket = io("http://localhost:3001");

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.messages);
  const token = useSelector((state) => state.application.token);
  console.log(messages);
  const user = useSelector((state) => state.application.user);


  
  // useEffect(() => {
  //   dispatch(getMessages());
  // }, [dispatch]);

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const text = message;
  console.log(user.login);


  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send_message", { message , });

    // opa.push(message);
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
      // opa.push(data.message);
    });
  }, [socket]);
  // console.log(opa);
  useEffect(() => {
    if (token) {
      dispatch(getUserById());
    }
  }, [dispatch, token]);
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Отправить</button>
        <h1>message:</h1>
        {messageReceived}
      </div>
      <div>
        <div key={1} className={styles.messages}>
          {messages.map((item) => {
            return <div key={item._id}>{item.text}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Chat;
