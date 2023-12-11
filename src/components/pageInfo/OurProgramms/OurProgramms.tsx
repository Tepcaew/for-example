import React from 'react';
import styles from "./OurProgramms.module.css"

const OurProgramms = () => {
    return (
        <div className={styles.programms}>
             <div>

            <h1>Наши программы</h1>
            <div className={styles.containerProgramms}>
                <div className={styles.kartsProgpamm}>
                     <p>Повысить квалификацию сотрудника</p>
                     <button>'более 330курсов </button>
                </div>
                <div className={styles.kartsProgpammTwo}>
                <p>Переобучить сотрудника на новую должность</p>
                     <button>'более 150 профессий </button>
                </div>
            </div>
        </div>
             </div>
    );
};

export default OurProgramms;