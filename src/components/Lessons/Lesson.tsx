import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Lessons.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../features/applicationSlice";

const Lesson = ({
  title,
  descr,
  lessonId,
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
  programId,
}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);


  const myPrograms = useSelector((state) => state.application.user.programs)
  const myProgram = myPrograms.find((item) => item.program._id === programId)
  console.log(myProgram);
  
  const completeLesson = myProgram.lessonsComplete.includes(lessonId)

  return (
    <div className={completeLesson ? styles.lessonComplete : styles.lesson}>
      <Link to={`/lessons/${programId}/${lessonId}`} className={styles.lessonBodyLink}>
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
          {completeLesson ? (
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
