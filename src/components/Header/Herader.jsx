import React from 'react'
import styles from './styles.module.css'


const Herader = () => {
    return (
        <>
            <div className={styles.tatil_text}>
                <div className="container">
                    <div className={styles.text}>
                        <p>Каталог</p>
                        <p>Услуги</p>
                        <p>О компании</p>
                        <p>Объекты</p>
                        <p>Цены</p>
                        <p>Блог</p>
                        <p>Контакты</p>
                        <div className={styles.inp_posk}>
                            <input type="text" name="" id="" />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Herader