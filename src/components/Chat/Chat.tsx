import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "./Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessages,
  getMessages,
  pushOnBackMessages,
} from "../../features/ChatSlice";
import { getUserById } from "../../features/applicationSlice";

const socket = io("http://localhost:3001");

const Chat = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.application.user.login);
  const mess = useSelector((state)=> state.messages.messages)
  console.log(mess);

  const [message, setMessage] = useState("");

  const [messages1, setMessage1] = useState([]);

  const sendMessage = (e) => {
    socket.emit("message", {
      text: message,
      name: localStorage.getItem("user"),
      id: `${socket.id}`,
      socketID: socket.id,
    });
  };
  const saveMessage = () => {
    dispatch(pushOnBackMessages(messages1))
  };
  useEffect(() => {
    socket.on("response", (data) => setMessage1([...messages1, data]));
  }, [socket, messages1]);

  useEffect(() => {
    dispatch(getUserById());

  }, [dispatch]);
  useEffect(() => {
    dispatch(getMessages());

  }, [dispatch]);
  return (
    <>
      <div>
        <div>
          {" "}
          <button onClick={saveMessage}>покинуть чат</button>
        </div>
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Отправить</button>
        <h1>message:</h1>
      </div>
      <div>
        <div key={1} className={styles.messages}>
          {/* {mess.map((it, index)=>
             <div key={index}>{it}</div>
          )} */}
          {messages1.map((item) =>
            item.name === userName ? (
              <div key={item.id} className={styles.green}>
                <p>вы</p>: {item.text}
              </div>
            ) : (
              <div key={item.id} className={styles.red}>
                {item.name}:{item.text}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
