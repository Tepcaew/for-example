import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import OneLesson from "./OneLesson";

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
  program
}) => {
  return (
    <>
      <Link to={`/lessons/${program}/${id}`}>
        <div>
          <h2>
            Урок: {number}. {title}
          </h2>
          <div>
            <img src={`http://localhost:4000/${image}`} alt="картинка урока" />
            <div>{descr}</div>
          </div>
          {complete ? <div>Пройден</div> : <div>Не пройден</div>}
        </div>
      </Link>
      <Routes>
        <Route
          path="/lessons/:id"
          element={
            <OneLesson
              title={title}
              text={text}
              text1={text1}
              text2={text2}
              text3={text3}
              head1={head1}
              head2={head2}
              head3={head3}
              image={image}
              image1={image1}
              image2={image2}
              image3={image3}
              tasks={tasks}
              video={video}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Lesson;
