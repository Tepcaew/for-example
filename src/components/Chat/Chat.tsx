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
const currentDate = new Date();
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const currentTime = `${hours}:${minutes}`;

const Chat = () => {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.application.user.avatar);
  const mess = useSelector((state) => state.messages.messages);

  const [message, setMessage] = useState("");

  const [messages1, setMessage1] = useState([]);

  console.log(message);

  const saveMessage = () => {
    dispatch(pushOnBackMessages(messages1));
  };
  useEffect(() => {
    socket.on("response", (data) => setMessage1([...messages1, data]));
  }, [socket, messages1]);

  useEffect(() => {
    dispatch(getUserById());
    dispatch(getMessages());
  }, [dispatch]);

  const sendMessage = () => {
    socket.emit("message", {
      text: message,
      name: localStorage.getItem("user"),
      id: `${socket.id}`,
      socketID: socket.id,
      datass: currentTime,
      avatar: avatar,
    });
    setMessage("");
  };
  return (
    <div className={styles.container}>

      <div>
        <div key={1} className={styles.messages}>
          {/* {mess.map((it, index)=>
             <div key={index}>{it}</div>
          )} */}
          {messages1.map((item) =>
            item.name === localStorage.getItem("user") ? (
              <div className={styles.mainDiv}>
                <div key={item.id} className={styles.green}>
                  {" "}
                  <p className={styles.div}>{item.datass}</p>
                  <p className={styles.p}>{item.text}</p>
                  <img src={`http://localhost:4000/${item?.avatar}`} alt="" />
                </div>
              </div>
            ) : (
              <div className={styles.mainDiv}>
                <p className={styles.redName}> {item.name}</p>
                <div key={item.id} className={styles.red}>
                  <img src={`http://localhost:4000/${item?.avatar}`} alt="" />
                  <p className={styles.p2}>{item.text}</p>
                  <p className={styles.div2}>{item.datass}</p>
                </div>
              </div>
            )
          )}
        </div>{" "}
        <div className={styles.divInp}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => {
              sendMessage();
            }}
            className={styles.messageButton}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
