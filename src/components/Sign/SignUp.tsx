import React, {useState} from 'react';
import styles from "./Sign.module.css"
import { authSignUp } from '../../features/applicationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const error = useSelector((state) => state.application.error);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setImage] = useState("");
  
    const dispatch = useDispatch();
  

    const handleLogin = (e) => {
      setLogin(e.target.value);
    };
    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
    const handleSignUp = (e) => {
      e.preventDefault()
      dispatch(authSignUp({ login, password, avatar}));
    };
    const handleImage = (e) => {
      setImage(e.target.files[0]);
    };
    return (
      <>
        <div className={styles.container}>
          <div className={styles.content}>
            {error ? <div>{error}</div> : null}
            <p className={styles.title}>Регистрация</p>
            <form action="" onSubmit={handleSignUp}>
              <input type="text" value={login} onChange={handleLogin} />
              <input type="password" value={password} onChange={handlePassword} />
              <input type="file" onChange={handleImage}  className={styles.inputFile}/>
              <button className={styles.btn}>зарегистрироваться </button>
  
            </form>
          </div>
          <div className={styles.sign}>
            <Link to="/login">у меня уже есть аккаунт</Link>
          </div>
        </div>
      </>
    );
};

export default SignUp;