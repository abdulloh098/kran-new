import React from 'react'
import styles from './styles.module.css'

const Nav = () => {
  return (
    <>
    <div className="container">
      
    </div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_img}>

        </div>

     <span >
     <p>
          Аренда спецтехники <br />
          LIEBHERR c 2000 года
        </p>
     </span>
      <span>
      <img src="soat.png" alt="" />
      <br />

      <p>
          10:00-17:00
        </p>
      </span>
    <span>
    <img src="lac.png" alt="" />
    
    <p >
    г. Москва, <br />
ул. Куликовская, 12</p>

    </span>
      <div className={styles.btn}>
      <button>
          Свяжитесь со мной
        </button>
      </div>
        <span>
          <img src="tel.png" alt="" />

          <p>  +7 (495) 645-19-20 <br /></p>
          <p> +7 (495) 226-20-30 <br /></p>
          <p> +7 (499) 929-96-66</p>
        </span>

      </nav>

    </>
  )
}

export default Nav