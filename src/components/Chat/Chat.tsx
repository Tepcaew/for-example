import React, { useState } from "react";
import styles from "./Chat.module.css";
const Chat = () => {
  const [text, setText] = useState("");


    const handleText = (e)=>{
        setText(e.target.value)
        console.log(e.target.value);
        
    }





  return (
    <div>
      <h1>общий чат</h1>

      <div className={styles.messages}></div>

      <div>
        <form action="" >
          <input type="text" value={text} onChange={handleText} />
          <button>отправить сообщение</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
