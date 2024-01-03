import React from 'react'
import { useAddUserMutation, useDeleteUserMutation, useGetUserQuery } from '@/redux/services/users';

import styles from './styles.module.css'
import Link from 'next/link';



const Section = () => {

    const [addUser] = useAddUserMutation();
    const [deleteUser] = useDeleteUserMutation()
    const { data, error, isLoading } = useGetUserQuery();


    function createUser(e) {
        e.preventDefault();
        addUser({
            name: e.target[0].value,
            image: e.target[1].value,
            age: e.target[2].value,
        }).unwrap();
    }


    return (
        <>
            <div className="container">


                <h1 className={styles.text}>
                    Каталог техники
                </h1>
                <div className=''>
                    <form className={styles.inp_qoshish} onSubmit={createUser}>
                        <input type='text' placeholder='name' required />
                        <input type='text' placeholder='image' required />
                        <input type='text' placeholder='age' required />
                        <input type="submit" />
                    </form>
                </div>
                <div className={styles.section_taraf}>
                    <div>
                        <div className={styles.left}>
                            <h2>Параметры</h2>
                            <p> Вид техники</p>
                            <span>
                                <input type="checkbox" />
                                <p>Мобильные краны</p>
                            </span>
                            <span>
                                <input type="checkbox" />
                                <p>Гусеничные краны</p>
                            </span>
                            <span>
                                <input type="checkbox" />
                                <p>Низкорамные тралы</p>
                            </span>
                            <span>
                                <input type="checkbox" />
                                <p>Модульные платформы</p>
                            </span>
                            <p>Грузоподъемность т.</p>
                            <button>
                                Показать
                            </button>
                        </div>

                        <div className={styles.left}>
                            <h2>Парк техники</h2>
                            <p>Мобильные краны Liebherr LTM</p>
                            <span>

                                <p>LTM 1500 (500 т.)</p>
                            </span>
                            <span>

                                <p>LTM 1500 (500 т.)</p>
                            </span>
                            <span>
                                <p>LTM 1500 (500 т.)</p>
                            </span>
                            <span>
                                <p>LTM 1500 (500 т.)</p>
                            </span>
                            <p>LTM 1500 (500 т.)</p>

                            <span>

                                <p>LTM 1500 (500 т.)</p>

                            </span>

                            <span>
                                <p>LTM 1500 (500 т.)</p>

                            </span>
                            <span>
                                <p>LTM 1500 (500 т.)</p>

                            </span>
                            <span>
                                <b>
                                    Гусеничные краны Liebherr LR
                                </b>
                            </span>
                            <span>
                                <b>
                                    Гусеничные краны Liebherr LR
                                </b>
                            </span>
                            <span>
                                <b>
                                    Гусеничные краны Liebherr LR
                                </b>
                            </span>
                            <button>

                                Показать
                            </button>
                        </div>
                    </div>
                    <div className={styles.rayt}>
                        {error ? (
                            <h1>XXX!!!</h1>
                        ) : isLoading ? (
                            <h1>Loading...</h1>
                        ) : data ? (
                            <div className={styles.wrapper}>
                                {data.map((el) => {
                                    return (
                                        <div className={styles.card}>
                                            <Link href={`/user/${el?.id}`}>
                                                <img src={el.image} alt='' />

                                            </Link>
                                            <p>{el.name}</p>
                                            <p>{el.age}</p>
                                            <button onClick={() => deleteUser({ id: el.id })}>Delete</button>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : null}

                    </div>
                </div>


            </div>
            <div className={styles.kran}>
                <div className={styles.chiziq}>
                    salomm
                </div>
                <div className='container'>
                    <div>
                        <h1>
                            Нужна помощь в подборе?
                        </h1>
                        <span>
                            <input type="text" />
                            <input type="text" />
                            <button>Получить консультацию</button>
                        </span>

                    </div>

                </div>

            </div>
            <div className={styles.chiziq}>
                salomm
            </div>
            <div className={styles.opshitext}>
            <div className='container'>
                
                <div className={styles.text2}>
                    <h1>Заголовок</h1>
                    <br /><br />
                    <p>
                        Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных <br />
                         площадках мостов и при монтаже ветросиловых установок.
                    </p>
                    <br />
                    <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />
                    <p>
                        Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов, на строительных <br />
                         площадках мостов и при монтаже ветросиловых установок.
                    </p>
                    <br />
                    <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />
                    <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />  <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />
                    <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />  <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />  <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />  <p>
                    Эта 750-тонная машина имеет универсальное применение со своей 140-метровой основной стрелой, 105-метровым управляемым  <br />
                    удлинителем стрелы, 21-метровым монтажным удлинителем, деррик-оборудованием и 400-тонным подвесным противовесом или <br />
                    балластировочной тележкой. 
                    </p>
                    <br />
                </div>
                </div>
                
            </div>
            <div className="container">
                <div className={styles.input_laksiya}>
                <div className={styles.sektion_1}>
           <h1>
                Контакты
                </h1>
                <br /><br />
                <p>
                Ежедневно мы развиваемся и стараемся стать лучше для вас, <br /> поэтому всегда рады получить от вас  обратную связь с <br />пожеланиями и идеями по улучшению наших продуктов! <br /><br />

Если у вас остались вопросы или есть предложения как стать <br /> лучше пишите нам!
                </p>
                <br />
                <p>
                    <img src="lakatsiya.png" alt="" />
                г. Москва, Россия, 117628,м. Бульвар Дмитрия Донского, ул. <br /> Куликовская, 12
                </p>
                <br /><br />
                <p>+7 (985)364-55-18 <br />
                +7 (985)364-55-18 <br />
                +7 (985)364-55-18 <br />
                </p>

           </div>
           <div className={styles.sektion_2}>
     <span>
     <input type="text" />
     </span>
     <br />
     <span className={styles.dabl_inpput}>
        <input type="text" />
        <input type="text" />
     </span>
     <br />
     <span>
        <input type="text" />
     </span>
     
     <span> <br />
        <button>
        Оставить заявку
        </button>
     </span>
           </div>
         
                </div>
           
            </div>
            <div className={styles.map}>
 
 </div>
        </>
    )
}

export default Section