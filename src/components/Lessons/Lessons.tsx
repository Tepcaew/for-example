import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lesson from "./Lesson";
import styles from "./Lessons.module.css";
import { getUserById } from "../../features/applicationSlice";

const Lessons = () => {
  const { programId } = useParams();
  const myPrograms = useSelector((state) => state.application.user.programs);
  const program = myPrograms?.find((item) => item.program._id === programId);

  console.log(myPrograms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);

  return (
    <div>
      {program?.program?.lessons?.map((item) => {
        return (
          <div key={item._id} className={styles.lessonsPage}>
            <h1 className={styles.lessonsHeader}>
              {program.program.programName}
            </h1>
            <div className={styles.lessonsContainer}>
              <Lesson
                key={item._id}
                lessonId={item.lesson._id}
                complete={item.complete}
                title={item.lesson.title}
                programId={item.lesson.program}
                number={item.lesson.number}
                descr={item.lesson.descr}
                tasks={item.lesson.tasks}
                head1={item.lesson.head1}
                head2={item.lesson.head2}
                head3={item.lesson.head3}
                image={item.lesson.image}
                image1={item.lesson.image1}
                image2={item.lesson.image2}
                image3={item.lesson.image3}
                text={item.lesson.text}
                text1={item.lesson.text1}
                text2={item.lesson.text2}
                text3={item.lesson.text3}
                video={item.lesson.video}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Lessons;
