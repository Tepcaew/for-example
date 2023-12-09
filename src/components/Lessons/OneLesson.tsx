import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./Lessons.module.css";
import Task from "../Tasks/Task";
import Tasks from "../Tasks/Tasks";

const OneLesson = () => {
  const [lekciya, setLekciya] = useState(true);
  const [test, setTest] = useState(false);

  const handleLekciya = () => {
    setLekciya(true);
    setTest(false);
  };
  const handleVideourok = () => {
    setLekciya(false);
    setTest(false);
  };
  const handleTest = () => {
    setLekciya(false);
    setTest(true);
  };

  const { programId, lessonId } = useParams();
  const myPrograms = useSelector((state) => state.application.user.programs);

  const myProgram = myPrograms?.find((item) => item.program._id === programId);

  const completeLesson = myProgram?.lessonsComplete.includes(lessonId);

  const lesson = myProgram?.program?.lessons?.find(
    (elem) => elem.lesson._id === lessonId
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
        <button
          disabled={completeLesson}
          className={styles.oneLessonButton}
          onClick={handleTest}
        >
          {completeLesson ? <div>Тест пройден</div> : <div>Тестирование</div>}
        </button>
      </div>
      <div className={styles.oneLessonBody}>
        <h2 className={styles.oneLessonTitle}>{lesson?.lesson?.title}</h2>
        {lekciya ? (
          <div className={styles.oneLessonLekciya}>
            <img
              className={styles.oneLessonLekciyaImage}
              src={`http://localhost:4000/${lesson?.lesson.image}`}
              alt=""
            />
            <div className={styles.oneLessonLekciyaText}>
              {lesson?.lesson.text}
            </div>
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson?.lesson.head1}
            </h3>
            <div>
              <img
                className={styles.oneLessonLekciyaImage1}
                src={`http://localhost:4000/${lesson?.lesson.image1}`}
                alt=""
              />
              <div className={styles.oneLessonLekciyaText1}>
                {lesson?.lesson.text1}
              </div>
            </div>
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson?.lesson.head2}
            </h3>
            <div>
              <img
                className={styles.oneLessonLekciyaImage2}
                src={`http://localhost:4000/${lesson?.lesson.image2}`}
                alt=""
              />
              <div className={styles.oneLessonLekciyaText2}>
                {lesson?.lesson.text2}
              </div>
            </div>
            <h3 className={styles.oneLessonLekciyaHead}>
              {lesson?.lesson.head3}
            </h3>
            <div>
              <img
                className={styles.oneLessonLekciyaImage3}
                src={`http://localhost:4000/${lesson?.lesson.image3}`}
                alt=""
              />
              <div className={styles.oneLessonLekciyaText3}>
                {lesson?.lesson.text3}
              </div>
            </div>
          </div>
        ) : !test ? (
          <div className={styles.oneLessonVideourok}>
            <iframe
              className={styles.oneLessonVideourokPlayer}
              src={`https://www.youtube.com/embed/${lesson?.lesson.video}?autoplay=0&mute=0`}
              name="youtube embed"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        ) : (
          <div>
            <Tasks tasks={lesson?.lesson.tasks} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OneLesson;
