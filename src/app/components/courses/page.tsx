'use client'

import styles from "./courses.module.css"

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/app/context/toggleConext";
import bothLanguageCourse from "../../api/courses-eng-titles.json"

interface Course {
    title: string;
    eng_title: string;
}

const Courses = () => {

    const { language } = useContext(LanguageContext)

    const [isItPortuguese, setIsItPortuguese] = useState(true);

    useEffect(() => {
        const coursesToShow = language === "portuguese";
        setIsItPortuguese(coursesToShow);
    }, [language]);

    return (
        <>
            <div data-aos="fade-down" data-aos-duration="5000" id="cursos">
                <h2 className={styles.titulo}>{language === "portuguese" ? 'Cursos realizados' : 'Certificates'}</h2>
                <div className={styles.container}>
                    <div className={styles.columnWrapper}>
                        <ul>
                            {
                                bothLanguageCourse.courses.map((course: Course, index: number) => (
                                    <li key={index}>
                                        {isItPortuguese ? course.title : course.eng_title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses
