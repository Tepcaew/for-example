import React from 'react';
import styles from '../aboutUs/aboutUs.module.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/bundle'

const AboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerText}>
        <h1 className={styles.aboutTitle}>О нас</h1>
        <p className={styles.aboutDesc}>Миссия For-Example — дать возможность каждому быть актуальным и востребованным специалистом прямо сейчас.
          Вне зависимости от возраста и географии.</p>
      </div>
      <section className={styles.container}>
        <div className={styles.infoVideoMain}>
          <iframe
            className={styles.infoVideo}
            src={`https://www.youtube.com/embed/?autoplay=1&mute=0`}
            name="youtube embed"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder={0}

          ></iframe>
        </div>
        <div className={styles.infoCours}>
          <p className={styles.aboutDesc2}>Мы предлагаем большой выбор курсов для профессионального и личностного развития.</p>
          <ul className={styles.cours}>
            <li className={styles.infoItem}>
              <b className={styles.infoSubTitle}>766</b> <br />
              Курсов</li>
            <li className={styles.infoItem}>
              <b className={styles.infoSubTitle}>126</b> <br />
              Кураторов</li>
            <li className={styles.infoItem}>
              <b className={styles.infoSubTitle}>76 336</b> <br />
              Пользователей</li>
          </ul>
        </div>
      </section>
      <div className={styles.contSvipe}>
        <section className={styles.svipeSect}>
          <h2 className={styles.text}>Лекторий For-Example — открытая площадка для выступлений, воркшопов и других ивентов</h2>
          <button className={styles.button}>Посмотреть лекции</button>
        </section>
      </div>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={-150}
          slidesPerView={1.5}
          navigation
          autoplay
          keyboard
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img
            className={styles.oneExcursionImage}
            src="https://research-style.ru/wp-content/uploads/2014/01/d0bad0bdd0b8d0b3d0b8.jpg"
            alt=""
          /></SwiperSlide>
          <SwiperSlide><img
            className={styles.oneExcursionImage}
            src="https://research-style.ru/wp-content/uploads/2014/01/d0bad0bdd0b8d0b3d0b8.jpg"
            alt=""
          /></SwiperSlide>
          <SwiperSlide>        <img
            className={styles.oneExcursionImage}
            src="https://research-style.ru/wp-content/uploads/2014/01/d0bad0bdd0b8d0b3d0b8.jpg"
            alt=""
          /></SwiperSlide>
          <SwiperSlide>        <img
            className={styles.oneExcursionImage}
            src="https://research-style.ru/wp-content/uploads/2014/01/d0bad0bdd0b8d0b3d0b8.jpg"
            alt=""
          /></SwiperSlide>
        </Swiper>
      </div>

      <section className={styles.foundersCont}>
        <h2 className={styles.foundersText}>Основатели платформы</h2>
        <div className={styles.foundersMain}>
          <div className={styles.companyWorkers}>
            <div className={styles.companyWorkersAvatar}>
              <img src="" alt="photo" />
            </div>
            <b className={styles.workersName}>
              Мухьаммад-Амин Шахабов
            </b>
            <span className={styles.workersInfo}>
              Основатель и генеральный
              <br />
              директор For-Example
            </span>
          </div>
          <div className={styles.companyWorkers}>
            <div className={styles.companyWorkersAvatar}>
              <img src="" alt="photo" />
            </div>
            <b className={styles.workersName}>
              Дауд Тепцаев
            </b>
            <span className={styles.workersInfo}>
              Основатель и продуктовый
              <br />
              директор For-Example
            </span>
          </div>
          <div className={styles.companyWorkers}>
            <div className={styles.companyWorkersAvatar}>
              <img src="" alt="photo" />
            </div>
            <b className={styles.workersName}>
              Ислам Шахидов
            </b>
            <span className={styles.workersInfo}>
              Основатель и программный
              <br />
              директор For-Example
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

