import React from 'react';
import styles from "./Consultation.module.css"

const Consultation = () => {
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
                    <input placeholder='  имя' type="text" />
                    <input placeholder='  томер телефона' type="text" />
                    <input placeholder='  корпоративная почта' type="text" />
                    <input placeholder='  организация ' type="text" />
                    <button>fsadasda</button>
                    <span>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</span>
                </div>
            </div>
        </div>
    );
};

export default Consultation;