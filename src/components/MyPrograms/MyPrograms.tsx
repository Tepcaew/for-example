import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyProgram from "./MyProgram";
import styles from "./MyPrograms.module.css";
import { getUserById } from "../../features/applicationSlice";

const MyPrograms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById());
  }, [dispatch]);
  const programs = useSelector((state) => state.application.user.programs);
  return (
    <div className={styles.programsContainer}>
      {programs.map((item) => {
        return (
          <MyProgram
            key={item._id}
            id={item._id}
            complete={item.complete}
            programName={item.program.programName}
            image={item.program.image}
            lessons={item.program.lessons}
            programId={item.program._id}
            lessonsComplete={item.lessonsComplete}
          />
        );
      })}
    </div>
  );
};

export default MyPrograms;
