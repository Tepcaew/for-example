import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completeLesson } from "../../features/applicationSlice";
import styles from "./Tasks.module.css";

const Tasks = ({ tasks }) => {
  const id = useSelector((state) => state.application.user._id);
  const { programId, lessonId } = useParams();
  const dispatch = useDispatch();

  const [userAnswer, setUserAnswer] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [question, setQuestion] = useState(0);

  const handleUserAnswer = () => {
    setUserAnswers(userAnswers.concat(userAnswer));
    setUserAnswer([]);
    setQuestion(question + 1);
  };
  const handleReturnTest = () => {
    setQuestion(0);
    setUserAnswers([]);
  };

  const handleCompleteLesson = () => {
    dispatch(completeLesson({ id, programId, lessonId }));
  };

  const answers = [
    tasks[0].task.answer,
    tasks[1].task.answer,
    tasks[2].task.answer,
    tasks[3].task.answer,
    tasks[4].task.answer,
  ];

  const handleTestResult = () => {
    let result = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (Number(userAnswers[i]) === Number(answers[i])) {
        result = result + 1;
      }
    }
    return result;
  };

  return (
    <div className={styles.tasksBlock}>
      {question === 0 ? (
        <div className={styles.oneTask}>
          <div className={styles.taskTitle}>{tasks[0].task.title}</div>
          {tasks[0].task.image ? (
            <img
              className={styles.taskImage}
              src={`http://localhost:4000/${tasks[0].task.image}`}
              alt="картинка вопроса"
            />
          ) : null}
          <ul className={styles.taskAswersList}>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant"
                value={0}
              />
              {tasks[0].task.keys[0]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant"
                value={1}
              />
              {tasks[0].task.keys[1]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant"
                value={2}
              />
              {tasks[0].task.keys[2]}
            </li>
            <div className={styles.taskButtonBlock}>
              <button
                className={styles.taskButton}
                disabled={!userAnswer.length}
                onClick={handleUserAnswer}
              >
                Ответить
              </button>
            </div>
          </ul>
        </div>
      ) : null}
      {question === 1 ? (
        <div className={styles.oneTask}>
          <div className={styles.taskTitle}>{tasks[1].task.title}</div>
          {tasks[1].task.image ? (
            <img
              className={styles.taskImage}
              src={`http://localhost:4000/${tasks[1].task.image}`}
              alt="картинка вопроса"
            />
          ) : null}
          <ul className={styles.taskAswersList}>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant1"
                value={0}
              />
              {tasks[1].task.keys[0]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant1"
                value={1}
              />
              {tasks[1].task.keys[1]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant1"
                value={2}
              />
              {tasks[1].task.keys[2]}
            </li>
            <div className={styles.taskButtonBlock}>
              <button
                className={styles.taskButton}
                disabled={!userAnswer.length}
                onClick={handleUserAnswer}
              >
                Ответить
              </button>
            </div>
          </ul>
        </div>
      ) : null}
      {question === 2 ? (
        <div className={styles.oneTask}>
          <div className={styles.taskTitle}>{tasks[2].task.title}</div>
          {tasks[2].task.image ? (
            <img
              className={styles.taskImage}
              src={`http://localhost:4000/${tasks[2].task.image}`}
              alt="картинка вопроса"
            />
          ) : null}
          <ul className={styles.taskAswersList}>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant2"
                value={0}
              />
              {tasks[2].task.keys[0]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant2"
                value={1}
              />
              {tasks[2].task.keys[1]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant2"
                value={2}
              />
              {tasks[2].task.keys[2]}
            </li>
            <div className={styles.taskButtonBlock}>
              <button
                className={styles.taskButton}
                disabled={!userAnswer.length}
                onClick={handleUserAnswer}
              >
                Ответить
              </button>
            </div>
          </ul>
        </div>
      ) : null}
      {question === 3 ? (
        <div className={styles.oneTask}>
          <div className={styles.taskTitle}>{tasks[3].task.title}</div>
          {tasks[3].task.image ? (
            <img
              className={styles.taskImage}
              src={`http://localhost:4000/${tasks[3].task.image}`}
              alt="картинка вопроса"
            />
          ) : null}
          <ul className={styles.taskAswersList}>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant3"
                value={0}
              />
              {tasks[3].task.keys[0]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant3"
                value={1}
              />
              {tasks[3].task.keys[1]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant3"
                value={2}
              />
              {tasks[3].task.keys[2]}
            </li>
            <div className={styles.taskButtonBlock}>
              <button
                className={styles.taskButton}
                disabled={!userAnswer.length}
                onClick={handleUserAnswer}
              >
                Ответить
              </button>
            </div>
          </ul>
        </div>
      ) : null}
      {question === 4 ? (
        <div className={styles.oneTask}>
          <div className={styles.taskTitle}>{tasks[4].task.title}</div>
          {tasks[4].task.image ? (
            <img
              className={styles.taskImage}
              src={`http://localhost:4000/${tasks[4].task.image}`}
              alt="картинка вопроса"
            />
          ) : null}
          <ul className={styles.taskAswersList}>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant4"
                value={0}
              />
              {tasks[4].task.keys[0]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant4"
                value={1}
              />
              {tasks[4].task.keys[1]}
            </li>
            <li className={styles.taskAswer}>
              <input
                className={styles.taskInput}
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant4"
                value={2}
              />
              {tasks[4].task.keys[2]}
            </li>
            <div className={styles.taskButtonBlock}>
              <button
                className={styles.taskButton}
                disabled={!userAnswer.length}
                onClick={handleUserAnswer}
              >
                Ответить
              </button>
            </div>
          </ul>
        </div>
      ) : null}
      {question > 4 ? (
        <div
          className={`${styles.taskEndBlock} ${
            handleTestResult() === 5
              ? styles.taskEndBlockComplete
              : styles.taskEndBlockUnComplete
          }`}
        >
          <div className={styles.taskEndText}>
            Ваш результат: {handleTestResult()}
          </div>
          {handleTestResult() === 5 ? (
            <div className={styles.taskComplete}>
              <div className={styles.taskEndText}>Урок успешно пройден!</div>
              <Link to={`/mycourse/${programId}`}>
                <button
                  className={styles.taskButton}
                  onClick={handleCompleteLesson}
                >
                  Завершить урок
                </button>
              </Link>
            </div>
          ) : (
            <div className={styles.taskNotComplete}>
              <div className={styles.taskEndText}>Урок не пройден.</div>
              <button className={styles.taskButton} onClick={handleReturnTest}>
                Повторить тест
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Tasks;
