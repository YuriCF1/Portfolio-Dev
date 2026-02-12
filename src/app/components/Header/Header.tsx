'use client'

import { useContext, useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "./Header.module.css";
import { LanguageContext } from "@/app/context/toggleConext";

export function Header() {

  const { language } = useContext(LanguageContext)

  return (
    <header>
      <div className={styles.cabecalho_container}>
        <h1>
          <Image
            src="/assets/img/logo5.png"
            title="Logo do escritório"
            alt="Logo do escritório"
            className={styles.cabecalho_logo}
            width={250}
            height={108.14}
            priority={true}
          />
        </h1>
        <nav className={styles.cabecalho_navegacao} id="home">
          <ul className={styles.cabecalho_links}>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#home">
              {language && language === "portuguese" ? "Início" : "Home"}
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#projetos">
                {language && language === "portuguese" ? "Projetos" : "Projects"}
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#cursos">
                {language && language === "portuguese" ? "Cursos" : "Courses"}
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.cabecalho_itens} href="#contato">
                {language && language === "portuguese" ? "Contato" : "Contact"}
              </a>
            </li>
          </ul>
        </nav>
        <div style={{ display: '' }}>
          {/* <button
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
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
