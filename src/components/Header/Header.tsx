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
          <div onClick={handle} className={courses?styles.btn2:styles.btn1}>
              <span>Все курсы</span> 
              <svg 
              className={courses?styles.svg1:styles.svg2}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path  d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z" />
              </svg>
              <svg  
              className={styles.svg3}
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path fill="black" d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z" />
              </svg>
          </div>

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
                <label htmlFor="" className={styles.lb}>
                  <input type="text" placeholder="Какой курс вы ищете?" />
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
                  <a href="#">
                    <span>Игры</span>
                  </a>
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
