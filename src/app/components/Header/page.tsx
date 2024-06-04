'use client'

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import EnglishImage from "/public/English.jpg";
import PortugueseImage from "/public/Portuguese.jpg";

export function Header() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header>
      <div className={styles.cabecalho_container}>
        <h1>
          <Image
            src="/assets/img/logo5.png"
            title="Logo da escritório"
            alt="Logo do escritório"
            className={styles.cabecalho_logo}
            width={215}
            height={93}
            priority={true}
          />
        </h1>
        <nav className={styles.cabecalho_navegacao} id="home">
          <ul className={styles.cabecalho_links}>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#home">
                Home
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#projetos">
                Projetos
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#cursos">
                Cursos
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.toggleButton} ${isToggled ? styles.toggled : ""}`}
          onClick={handleToggle}
        >
          <div className={styles.toggleContent}>
            <div className={`${styles.toggleBall} ${isToggled ? styles.toggled : ""}`}></div>
            {isToggled ?
              <Image
                src={PortugueseImage}
                alt="Portuguese"
                width={30}
                height={21.0}
                className={`${styles.toggleImage} ${styles.portFlag}`}
              /> :
              <Image
                src={EnglishImage}
                alt="English"
                width={30}
                height={21.0}
                className={`${styles.toggleImage} ${styles.engFlag}`}
              />
            }
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
