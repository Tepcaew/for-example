import React from "react";
import styles from "./KartsTraining.module.css"


const KartsTraining = () =>{
    return(
        <div className={styles.kartsTrainingContainer}>
            <div className={styles.container}>
          <div className={styles.title}>
           <h1>Корпоративное обучение для бизнеса</h1>
           <p>Подбираем и разрабатываем образовательные программы с учётом специфики ниши, целей и задач компании.</p>
           <button>Заказать обучение</button>
          </div>
          <div className={styles.imgBlock}>
            <img src="https://thumb.tildacdn.com/tild3063-6431-4332-b639-303965313639/-/resize/584x/-/format/webp/Group_11-min.png" alt="" />
          </div>
            </div>
            <div className={styles.text}>
                <p>Skillbox №1 по качеству обучения по версии Smart Ranking</p>
                <p>93% окончивших курс отмечают, что Skillbox помог им достичь цели</p>
            </div>
           
        </div>
    )
}

export default KartsTraining