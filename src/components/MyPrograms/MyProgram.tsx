import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyPrograms.module.css";

const MyProgram = ({ complete, programName, lessons, image, programId }) => {
  return (
    <div className={styles.programCard}>
      <img
        className={styles.programImage}
        src={`http://localhost:4000/${image}`}
        alt="картинка программы"
      />
      <div className={styles.programText}>
        <div className={styles.programName}>{programName}</div>
        {complete ? <p className={styles.programComplete}>Курс пройден</p> : <p>Сейчас изучаете</p>}
      </div>
      <Link
        className={styles.programCardButtonLink}
        to={`/mycourse/${programId}`}
      >
        <button className={styles.programCardButton}>К урокам</button>
      </Link>
    </div>
  );
};

export default MyProgram;
