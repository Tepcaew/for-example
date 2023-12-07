import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/categoriesSlice";
import { Link } from "react-router-dom";
import { exits, getUserById } from "../../features/applicationSlice";
const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);

  const [open, setOpen] = useState(false);

  const openCloseProfile = () => {
    setOpen(!open);
  };
  console.log(open);

  const [courses, setCourses] = useState(false);
  const handle = () => {
    setCourses(courses ? false : true);
  };
  const categories = useSelector((state) => state.categories.categories);

  const [text, setText] = useState("");

  const handleText = () => {
    setText(text);
  };
  const handleExit = (e) => {
    e.preventDefault();
    dispatch(exits());
  };
  // const filtered = all.filter((item) => {
  //   return item.name.toLowerCase().includes(value.toLowerCase());
  // });
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    if (token) {
      dispatch(getUserById());
    }
  }, [dispatch, token]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <Link to={"/"}>
            <h3>for-example</h3>
          </Link>
          <div onClick={handle} className={courses ? styles.btn2 : styles.btn1}>
            <span>Все курсы</span>
            <svg
              className={courses ? styles.svg1 : styles.svg2}
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z" />
            </svg>
            {/* <svg
              className={styles.svg3}
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z"
              />
            </svg> */}
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>О for-example</li>

              <li>Вебинары</li>
              <li>Медиа</li>
              <li>Компаниям</li>

                {token ? (
                  <>
                    <div>
                      <div
                        onClick={openCloseProfile}
                        className={styles.profileTop}
                      >
                        <span>
                          <img
                            className={styles.avatar}
                            src={`http://localhost:4000/${user?.avatar}`}
                            alt=""
                          />
                        </span>
                        <span>{user.login}</span>
                        <svg
                          className={open ? styles.svg4 : styles.svg3}
                          xmlns="http://www.w3.org/2000/svg"
                          id="Layer_1"
                          data-name="Layer 1"
                          viewBox="0 0 24 24"
                        >
                          <path d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z" />
                        </svg>
                      </div>
                    </div>
                    {open && (
                      <div className={open?styles.profile2:styles.profile}>                               
                          {token && (
                            <Link to={"/mycourse"}>
                              <p>Мои курсы</p>
                            </Link>
                          )}
                          <p>мой баланс: {user.cash}руб</p>

                          <p>сообщения</p>
                          <p>настройки</p>
                          <p onClick={handleExit}>выйти из аккаунта</p>

                      </div>
                    )}
                  </>
                ) : (
                  <Link to={"/login"}>Войти</Link>
                )}
            </ul>
          </nav>
        </div>
      </div>
      {courses && (
        <div className={styles.revealDiv}>
          <div className={styles.cont}>
            <div className={styles.qq}>
              <div>
                <label htmlFor="" className={styles.lb}>
                  <input
                    type="text"
                    placeholder="Какой курс вы ищете?"
                    value={text}
                    onChange={handleText}
                  />
                  <button>x</button>
                </label>
              </div>
              <article className={styles.imgDiv}>
                <img
                  src="https://248006.selcdn.ru/MainSite/4596ba7d-b286-4080-b8e0-d4e1211a79d9/c/oa6coyef-desktop-webp.webp"
                  alt=""
                />
              </article>
              <ul className={styles.categories}>
                {categories.map((item) => {
                  return (
                    <Link
                      to={`/programs/${item._id}`}
                      className={styles.category}
                      key={item._id}
                    >
                      <div>{item.categoryName}</div>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
