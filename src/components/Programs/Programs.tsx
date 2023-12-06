import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPrograms } from '../../features/programSlice';
import styles from "./Program.module.css"
import Program from './Program';

const Programs = () => {
    const programs = useSelector((state) => state.programs.programs);
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const programsFilter = programs.filter((program) => {
    if (!categoryId) return true;
    return program.category._id === categoryId;
  });
  
  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);

    return (
        <div className={styles.programsContainer}>
            {programsFilter.map((program) => {
                return (
                    <Program
                    key={program._id}
                    program={program._id}
                    programName={program.programName}
                    descr={program.descr}
                    image={program.image}
                    price={program.price}
                    demo={program.demo}
                    category={program.category}
                    />
                )
            })}
            
        </div>
    );
};

export default Programs;