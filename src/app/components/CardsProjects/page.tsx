'use client'

import { useContext, useEffect, useState } from "react";
import projectsPortuguese from "../../api/projects.json"
import projectEnglish from "../../api/ProjectsEnglish.json"
import styles from "./Cards.module.css"
import Image from "next/legacy/image"
import { LanguageContext } from "@/app/context/toggleConext";
import IProject from "../../Interfaces/IProjects"

const Cards = () => {
    const { language } = useContext(LanguageContext)

    const [srcProjects, setSrcProjects] = useState(projectsPortuguese);

    useEffect(() => {
        const srcProject = language === "portuguese" ? projectsPortuguese : projectEnglish;
        setSrcProjects(srcProject);
    }, [language]);

    return (
        <div className={styles.cardSection}>
            {srcProjects.projects.map((project: IProject, index: number) => (
                <ul className={styles.title} key={index}>
                    <li key={`title-${index}`}>
                        <strong className={styles.cardTitle}>{language && language === "portuguese" ? "Título" : "Title"}:</strong> <p>{project.title}</p>
                    </li>
                    <li key={`description-${index}`}>
                        <strong>{language && language === "portuguese" ? "Descrição" : "Description"}:</strong> <p> {project.description} </p>
                    </li>
                    {/* Tem que fazer isso para que o tamanho da imagem abaixo consiga ser modificada pelo css */}
                    <div className={styles.divImage}>
                        <a href={project.linkDeploy}>
                            <Image src={project.img} alt={project.altImg} objectFit="cover" layout="fill" className={styles.exampleImg} />
                        </a>
                    </div>
                    <li key={`techs-${index}`} className={styles.techsContainer}>
                        <strong>{language && language === "portuguese" ? "Tecnologias" : "Techs"}</strong>
                        <div>
                            {project.techs.map((tech, techIndex) => (
                                <img key={`tech-${index}-${techIndex}`} src={tech} alt={project.techDescriptions && project.techDescriptions[techIndex] ? project.techDescriptions[techIndex] : 'Descrição da tecnologia'} className={styles.techs} />
                            ))}
                        </div>
                    </li>
                    <li key={`deploy-${index}`} className={styles.techsContainer}>
                        <strong>Deploys:</strong>
                        <a href={project.linkGH} target="_blank">
                            <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="Ícone do GitHub" width={25} height={25} className={styles.techs} />
                        </a>
                        <a href={project.linkDeploy} target="_blank">
                            <Image src='/img/svg-internet.svg' alt="Ícone do GitHub" width={25} height={25} className={styles.techs} />
                        </a>
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default Cards
