import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPrograms } from '../../features/programSlice';

const OneProgram = () => {
    const programs = useSelector((state) => state.programs.programs);
  const dispatch = useDispatch();
  const { id } = useParams();
  const oneProgram = programs?.find((program) => program._id === id);
  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);
    return (
        <div key={oneProgram._id}>
            <div>{oneProgram.programName}</div>
      <img src={`http://localhost:4000/${oneProgram.image}`} alt="картинка программы" />
      <div>
        <h2>О курсе</h2>
        {oneProgram.descr}
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${oneProgram.demo}?autoplay=0&mute=0`}
        name="youtube embed"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder={0}
      ></iframe>
      <div>Стоимость курса: {oneProgram.price}</div>
      <button>Купить курс</button>
        </div>
    );
};

export default OneProgram;