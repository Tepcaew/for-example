import React, { useState } from "react";
import styles from "./Consultation.module.css"
import { useDispatch } from "react-redux";
import { addConsults } from "../../../features/consultSlice";


const Consultation = () => {
    

   const [consultName, setConsultName] = useState("")
   const [consultNumber,setConsultNumber] = useState("")
   const [consultMail,setConsultMail] = useState("")
   const [consultOrganization, setConsultOrganization] = useState("")

   const dispatch = useDispatch();


   
  
  
    const handleSetConsultName = (e) => {
        setConsultName(e.target.value);
    };
    const handleSetConsultNumber = (e) => {
        setConsultNumber(e.target.value);
    };
    const handleSetConsultMAil = (e) => {
        setConsultMail(e.target.value);
    };
    const handleSetConsultOrganization = (e) =>{
        setConsultOrganization(e.target.value)
    }
  
    const handleAddConsults = () => {
      dispatch(addConsults({ consultName, consultNumber,consultMail,consultOrganization }));
      setConsultName("");
      setConsultNumber("");
      setConsultMail("");
      setConsultOrganization("")

    }
    return (
        <div className={styles.consultContainer}>
            <div className={styles.consultCart}>
                <div className={styles.cartsTitle}>
                    <h2>Закажите консультацию и получите промокод на скидку</h2>
                    <p>Разработаем программу для вашей компании, если среди готовых вариантов вам ничего не подходит.</p>
                    
                    <div className={styles.contacts}>
                        <p>dadasd@dads</p>
                        <p>8384832432432</p>
                    </div>
                </div>
                <div className={styles.cartsInput}>
                    <input value={consultName} onChange={handleSetConsultName} placeholder='  имя' type="text" />
                    <input value={consultNumber}onChange={handleSetConsultNumber} placeholder='  томер телефона' type="text" />
                    <input value={consultMail} onChange={handleSetConsultMAil} placeholder='  корпоративная почта' type="text" />
                    <input value={consultOrganization} onChange={handleSetConsultOrganization} placeholder='  организация ' type="text" />
                    <button onClick={handleAddConsults} >fsadasda</button>
                    <span>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</span>
                </div>
            </div>
        </div>
    );
};


export default Consultation;