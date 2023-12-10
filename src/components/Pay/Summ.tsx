import React, { useState, useEffect } from "react";
import styles from "./Pay.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getUserById } from "../../features/applicationSlice";

const Summ = () => {
  const id = useSelector((state) => state.application.user._id);
  const [newCash, setSum] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById());
  }, [newCash]);

  const handleAddCash = () => {
    dispatch(addCash({ id, newCash }));
  };

  return (
    <div className={styles.payBody2}>
      <form className={styles.payForm} onSubmit={handleAddCash}>
        <input
          className={styles.payInput}
          type="text"
          placeholder="Введите сумму"
          onChange={(e) => setSum(e.target.value)}
        />
        <button className={styles.payButton}>Отправить</button>
      </form>
    </div>
  );
};

export default Summ;
