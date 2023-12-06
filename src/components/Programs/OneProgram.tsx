import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useParams } from "react-router-dom";
import { getPrograms } from "../../features/programSlice";
import { addPrograms } from "../../features/applicationSlice";
import styles from "./Program.module.css";

const OneProgram = () => {
  const programs = useSelector((state) => state.programs.programs);
  const id = useSelector((state) => state.application.user._id);
  const cash = useSelector((state) => state.application.user.cash);

  const dispatch = useDispatch();
  const { program } = useParams();
  const userPrograms = useSelector((state) => state.application.user.programs);

  const userProg = userPrograms.filter((item) => item.program._id === program);

  const oneProgram = programs?.find((item) => item._id === program);
  const price = oneProgram.price;
  const [lowCash, setLowCash] = useState(false);

  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

  const handleBuyCourse = () => {
    if (cash >= price) {
      setLowCash(false);
      dispatch(addPrograms({ id, program, price }));
    } else {
      setLowCash(true);
    }
  };
  return (
    <div key={oneProgram._id} className={styles.oneProgram}>
      <div className={styles.oneProgramName}>{oneProgram.programName}</div>
      <img
        className={styles.oneProgramImage}
        src={`http://localhost:4000/${oneProgram.image}`}
        alt="картинка программы"
      />
      <div className={styles.oneProgramDescr}>
        <h2 className={styles.oneProgramDescrHead}>О курсе</h2>
        {oneProgram.descr}
      </div>
      <div className={styles.oneProgramVideo}>
        <iframe
          src={`https://www.youtube.com/embed/${oneProgram.demo}?autoplay=0&mute=0`}
          name="youtube embed"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
      <div className={styles.oneProgramPrice}>
        Стоимость курса: {oneProgram.price}
      </div>
      {lowCash ? (
        <div className={styles.oneProgramLowCash}>Недостаточно средств</div>
      ) : null}
      <button
        className={styles.oneProgramButton}
        disabled={userProg.length}
        onClick={handleBuyCourse}
      >
        {userProg.length ? (
          <div className={styles.oneProgramButtonText}>Уже изучаете</div>
        ) : (
          <div>Купить курс</div>
        )}
      </button>
    </div>
  );
};

export default OneProgram;
