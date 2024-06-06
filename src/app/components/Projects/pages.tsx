'use client'

import { useContext } from "react";
import styles from "./Projects.module.css"
import { LanguageContext } from "@/app/context/toggleConext";
import Icons from "../Icons/Page";
import Cards from "../CardsProjects/page";
import CardProfile from "../CardProfile/page";
export default function Projects() {

  const { language } = useContext(LanguageContext)

  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <h1 className={styles.mainTitle}>{language === "portuguese" ? "Experiências" : "Experiences"}</h1>
      <Icons />
      <section className={styles.board} id="projetos" >
        <CardProfile />
        <Cards />
      </section>
    </div>
  )
}
