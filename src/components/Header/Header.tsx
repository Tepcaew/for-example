import React, { useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [courses, setCourses] = useState(false);
  const handle = () => {
    setCourses(courses ? false : true);
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h3>for-example</h3>
          <p onClick={handle}>Все курсы</p>
          <nav>
            <ul className={styles.navList}>
              <li>О for-example</li>
              <li>Вебинары</li>
              <li>Медиа</li>
              <li>Компаниям</li>
              <li>Войти</li>
            </ul>
          </nav>
        </div>
      </div>
      {courses && (
        <div className={styles.revealDiv}>
          <div className={styles.cont}>
            <div className={styles.qq}>
              <div>
                <input type="text" placeholder="Какой курс вы ищете?" />
              </div>
              <article className={styles.imgDiv}>
                <img
                  src="https://248006.selcdn.ru/MainSite/4596ba7d-b286-4080-b8e0-d4e1211a79d9/c/oa6coyef-desktop-webp.webp"
                  alt=""
                />
              </article>
              <ul className={styles.categories}>
                <li className={styles.category}>
                  <a href="#">
                    <span>программирование</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>программирование</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span className={styles.span}>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>Кино и сериалы</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Дизайн</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#"><span>Игры</span></a>
                </li>
                <li className={styles.category}>
                  <a href="">
                    <span>Музыка</span>
                  </a>
                </li>
                <li className={styles.category}>
                  <a href="#">
                    <span>Аналитик</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
