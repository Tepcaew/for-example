import React, { useState } from "react";

const Task = ({ title, keys, answer }) => {
  
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const handleUserAnswer = () => {
    setUserAnswers(userAnswers.concat(userAnswer));
  };
  console.log(keys);

  return (
    <div>
      <div>{title}</div>
      <ul>
        <li>
          <input
            type="radio"
            onChange={() => setUserAnswer(0)}
            name="variant"
            value={0}
          />
          {keys[0]}
        </li>
        <li>
          <input
            type="radio"
            onChange={() => setUserAnswer(1)}
            name="variant"
            value={1}
          />
          {keys[1]}
        </li>
        <li>
          <input
            type="radio"
            onChange={() => setUserAnswer(2)}
            name="variant"
            value={2}
          />
          {keys[2]}
        </li>
        {console.log(userAnswer)}

        {/* {userAnswer == answer ? (
          <div>Верно</div>
        ) : (
          <div>Неверно</div>
        )} */}
        <button onClick={handleUserAnswer}>Ответить</button>
      </ul>
    </div>
  );
};

export default Task;
