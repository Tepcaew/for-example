import React, { useState } from "react";
import styles from "./Sign.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { Link } from "react-router-dom";
const SignIn = () => {
  const error = useSelector((state) => state.application.error);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePush = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Войдите в аккаунт</p>
        {error ? <div>{error}</div> : null}
        <form action="" onSubmit={handlePush}>
          <input type="text" onChange={handleLogin} value={login} />
          <input type="password" onChange={handlePassword} value={password} />
          <button type="submit" className={styles.btn}>войти</button>
        </form>
        <div className={styles.link}>
        <p className={styles.sign}><Link to="/signUp" >хочу зарегистрироваться</Link></p>
          <p className={styles.sign}><Link to="/loginAdmin">войти как администратор</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
