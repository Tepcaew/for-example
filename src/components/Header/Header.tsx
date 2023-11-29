import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h3>for-example</h3>
        <p>Все курсы</p>
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
  );
};

export default Header;
