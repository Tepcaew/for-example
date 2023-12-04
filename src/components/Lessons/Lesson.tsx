import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import OneLesson from "./OneLesson";
import styles from "./Lessons.module.css";

const Lesson = ({
  title,
  descr,
  id,
  number,
  text,
  text1,
  text2,
  text3,
  head1,
  head2,
  head3,
  image,
  image1,
  image2,
  image3,
  tasks,
  video,
  complete,
  program,
}) => {
  return (
    <div className={complete ? styles.lessonComplete : styles.lesson}>
      <Link to={`/lessons/${program}/${id}`} className={styles.lessonBodyLink}>
        <div className={styles.lessonBody}>
          <img
            className={styles.lessonImage}
            src={`http://localhost:4000/${image}`}
            alt="картинка урока"
          />
          <div className={styles.lessonText}>
            <h2 className={styles.lessonTitle}>
              Урок: {number}. {title}
            </h2>
            <div className={styles.lessonDescr}>{descr}</div>
          {complete ? (
            <div className={styles.lessonCompleteTrue}>Пройден</div>
          ) : (
            <div className={styles.lessonCompleteFalse}>Не пройден</div>
          )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Lesson;
