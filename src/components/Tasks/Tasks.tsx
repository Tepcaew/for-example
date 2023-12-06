import React, { useState } from "react";
import Task from "./Task";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completeLesson } from "../../features/applicationSlice";

const Tasks = ({ tasks }) => {
  const id = useSelector((state) => state.application.user._id);
  const { programId, lessonId } = useParams();
  console.log(programId, lessonId);
  const dispatch = useDispatch();

  const [userAnswer, setUserAnswer] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [question, setQuestion] = useState(0);
  console.log(userAnswer);

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
  // useEffect(() => {
  //   dispatch(getUserById());
  // }, [dispatch]);

  const answers = [
    tasks[0].task.answer,
    tasks[1].task.answer,
    tasks[2].task.answer,
    tasks[3].task.answer,
    tasks[4].task.answer,
  ];

  //   console.log(userAnswers, answers);
  const handleTestResult = () => {
    let result = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (Number(userAnswers[i]) === Number(answers[i])) {
        result = result + 1;
      }
    }
    return result;
  };

  // console.log(handleTestResult());
  return (
    <div>
      {question === 0 ? (
        <div>
          <div>{tasks[0].task.title}</div>
          <ul>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant"
                value={0}
              />
              {tasks[0].task.keys[0]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant"
                value={1}
              />
              {tasks[0].task.keys[1]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant"
                value={2}
              />
              {tasks[0].task.keys[2]}
            </li>
            <button disabled={!userAnswer.length} onClick={handleUserAnswer}>
              Ответить
            </button>
          </ul>
        </div>
      ) : null}
      {question === 1 ? (
        <div>
          <div>{tasks[1].task.title}</div>
          <ul>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant1"
                value={0}
              />
              {tasks[1].task.keys[0]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant1"
                value={1}
              />
              {tasks[1].task.keys[1]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant1"
                value={2}
              />
              {tasks[1].task.keys[2]}
            </li>
            <button disabled={!userAnswer.length} onClick={handleUserAnswer}>
              Ответить
            </button>
          </ul>
        </div>
      ) : null}
      {question === 2 ? (
        <div>
          <div>{tasks[2].task.title}</div>
          <ul>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant2"
                value={0}
              />
              {tasks[2].task.keys[0]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant2"
                value={1}
              />
              {tasks[2].task.keys[1]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant2"
                value={2}
              />
              {tasks[2].task.keys[2]}
            </li>
            <button disabled={!userAnswer.length} onClick={handleUserAnswer}>
              Ответить
            </button>
          </ul>
        </div>
      ) : null}
      {question === 3 ? (
        <div>
          <div>{tasks[3].task.title}</div>
          <ul>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant3"
                value={0}
              />
              {tasks[3].task.keys[0]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant3"
                value={1}
              />
              {tasks[3].task.keys[1]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant3"
                value={2}
              />
              {tasks[3].task.keys[2]}
            </li>
            <button disabled={!userAnswer.length} onClick={handleUserAnswer}>
              Ответить
            </button>
          </ul>
        </div>
      ) : null}
      {question === 4 ? (
        <div>
          <div>{tasks[4].task.title}</div>
          <ul>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([0])}
                name="variant4"
                value={0}
              />
              {tasks[4].task.keys[0]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([1])}
                name="variant4"
                value={1}
              />
              {tasks[4].task.keys[1]}
            </li>
            <li>
              <input
                type="radio"
                onChange={() => setUserAnswer([2])}
                name="variant4"
                value={2}
              />
              {tasks[4].task.keys[2]}
            </li>
            <button disabled={!userAnswer.length} onClick={handleUserAnswer}>
              Ответить
            </button>
          </ul>
        </div>
      ) : null}
      {question > 4 ? (
        <div>
          <div>Ваш результат: {handleTestResult()}</div>
          {handleTestResult() === 5 ? (
            <div>
              <div>Урок успешно пройден!</div>
              <Link to={`/mycourse/${programId}`}>
                <button onClick={handleCompleteLesson}>Завершить урок</button>
              </Link>
            </div>
          ) : (
            <div>
              <div>Урок не пройден.</div>
              <button onClick={handleReturnTest}>Повторить тест</button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Tasks;
