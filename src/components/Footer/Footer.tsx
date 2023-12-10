import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.direction}>
        <h2>Направление</h2>
        <div className={styles.div}>
          <div className={styles.first_block}>
            <div className={styles.title}>
              <div className={styles.prog}>Программирование</div>
              <div>Аналитика</div>
              <div>Управление</div>
              <div>Маркетплейсы</div>
              <div>Игры</div>
              <div>Психология</div>
              <div>Все курсы</div>
              <div>Популярные курсы</div>
            </div>
            <div className={styles.title}>
              <div>Дизайн</div>
              <div>Маркетинг</div>
              <div>Финансы</div>
              <div>Кино и музыка</div>
              <div>Инженерия</div>
              <div>Английский язык</div>
            </div>
          </div>
          <div className={styles.number}>
            <div className={styles.numberOne}>
              <span>8 (800) 500-05-22</span>
              <p>Контактный центр</p>
            </div>

            <div>
              <span>+7 499 444 90 36</span>
              <p>Отдел заботы о пользователях</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.twoBlock}>
        <div className={styles.bl}>
          <div className={styles.oSkill}>
            <h2>О Skillbox</h2>
            <div>О нас</div>
            <div> Центр карьеры</div>
            <div> Отзывы</div>
            <div>Контакты</div>
            <div> Вакансии</div>
            <div>Школа кураторов</div>
            <div>Сообщество Skillbox</div>
            <div>О платформе</div>
          </div>
          <div className={styles.oSkill}>
            <h2>Проекты</h2>
            <div>Вебинары</div>
            <div>Медиа</div>
            <div>Распродажа</div>
          </div>
          <div className={styles.oSkill}>
            <h2>Сотрудничество</h2>
            <div> Скидки для друзей</div>
            <div>Партнёрская программа</div>
            <div>Корпоративным клиентам</div>
            <div>Работодателям</div>
            <div>Материалы бренда</div>
          </div>
        </div>
        <div className={styles.number}>
          <div className={styles.numberOne}>
            <span>г. Москва, ул. Тимура Фрунзе, дом 11, корпус 2, этаж 1, помещение 1, комната 75</span>
          </div>

          <div className={styles.icon}>
            <img  src="	https://static.tildacdn.com/tild3735-6162-4638-b935-303537323730/ac124aaf-988e-4995-8.svg" alt="" />
            <img src=" https://static.tildacdn.com/tild3732-3930-4661-a135-343664386462/71b8ef05-b3b2-4e22-b.svg" alt="" />
            <img src="	https://static.tildacdn.com/tild6164-3937-4335-a562-626365666234/fa1e2018-7c42-48e8-b.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
