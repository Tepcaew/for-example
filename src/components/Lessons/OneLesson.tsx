import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OneLesson = () => {
  const { program, id } = useParams();
  const myPrograms = useSelector((state) => state.application.user.programs);

  const myProgram = myPrograms?.find((item) => item.program._id === program);
  
const lesson = myProgram.program.lessons?.find((elem) => elem.lesson._id === id)

  return (
    <div>
      <h2>{lesson.lesson.title}</h2>
      <img src={`http://localhost:4000/${lesson.lesson.image}`} alt="" />
      <div>{lesson.lesson.text}</div>
      <h3>{lesson.lesson.head1}</h3>
      <div>{lesson.lesson.text1}</div>
      <img src={`http://localhost:4000/${lesson.lesson.image1}`} alt="" />
      <h3>{lesson.lesson.head2}</h3>
      <div>{lesson.lesson.text2}</div>
      <img src={`http://localhost:4000/${lesson.lesson.image2}`} alt="" />
      <h3>{lesson.lesson.head3}</h3>
      <div>{lesson.lesson.text3}</div>
      <img src={`http://localhost:4000/${lesson.lesson.image3}`} alt="" />
    </div>
  );
};

export default OneLesson;
