import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./Lessons.module.css";

const OneLesson = () => {
  const [lekciya, setLekciya] = useState(true);
  const handleLekciya = () => {
    setLekciya(true);
  };
  const handleVideourok = () => {
    setLekciya(false);
  };

  const { program, id } = useParams();
  const myPrograms = useSelector((state) => state.application.user.programs);

  const myProgram = myPrograms?.find((item) => item.program._id === program);

  const lesson = myProgram.program.lessons?.find(
    (elem) => elem.lesson._id === id
  );

  return (
    <div className={styles.oneLesson}>
      <div className={styles.oneLessonButtonsBlock}>
        <button className={styles.oneLessonButton} onClick={handleLekciya}>
          Лекция
        </button>
        <button className={styles.oneLessonButton} onClick={handleVideourok}>
          Видеоурок
        </button>

        <button className={styles.oneLessonButton}>
          <Link to={"#"} className={styles.oneLessonButtonLink}>
            Тестирование
          </Link>
        </button>
      </div>
      <div className={styles.oneLessonBody}>
        <h2 className={styles.oneLessonTitle}>{lesson.lesson.title}</h2>
        {lekciya ? (
          <div className={styles.oneLessonLekciya}>
            <img
              className={styles.oneLessonLekciyaImage}
              src={`http://localhost:4000/${lesson.lesson.image}`}
              alt=""
            />
            <div className={styles.oneLessonLekciyaText}>
              {lesson.lesson.text}
            </div>
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson.lesson.head1}
            </h3>
            <div className={styles.oneLessonLekciyaText}>
              {lesson.lesson.text1}
            </div>
            <img
              className={styles.oneLessonLekciyaImage}
              src={`http://localhost:4000/${lesson.lesson.image1}`}
              alt=""
            />
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson.lesson.head2}
            </h3>
            <div className={styles.oneLessonLekciyaText}>
              {lesson.lesson.text2}
            </div>
            <img
              className={styles.oneLessonLekciyaImage}
              src={`http://localhost:4000/${lesson.lesson.image2}`}
              alt=""
            />
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson.lesson.head3}
            </h3>
            <div className={styles.oneLessonLekciyaText}>
              {lesson.lesson.text3}
            </div>
            <img
              className={styles.oneLessonLekciyaImage}
              src={`http://localhost:4000/${lesson.lesson.image3}`}
              alt=""
            />
          </div>
        ) : (
          <div className={styles.oneLessonVideourok}>
            <iframe
              className={styles.oneLessonVideourokPlayer}
              src={`https://www.youtube.com/embed/${lesson.lesson.video}?autoplay=0&mute=0`}
              name="youtube embed"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneLesson;
