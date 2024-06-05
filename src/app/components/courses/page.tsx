'use client'

import styles from "./courses.module.css"

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/app/context/toggleConext";
import bothLanguageCourse from "../../api/courses-eng-titles.json"

interface Course {
    title: string;
    eng_title: string
}


const Courses = () => {

    const { language } = useContext(LanguageContext)

    const [isItPortgueuse, setIsItPortgueuse] = useState(true);

    useEffect(() => {
        const coursesToShow = language === "portuguese";
        setIsItPortgueuse(coursesToShow);
    }, [language]);


    return (
        <>
            <div data-aos="fade-down" data-aos-duration="5000" id="cursos">
                <h2 className={styles.titulo}>Cursos realizados</h2>
                <div className={styles.container}>
                    <div className={styles.columnWrapper}>
                        <ul>
                            {
                                bothLanguageCourse.courses.map((course: Course, index: number) => (
                                    <>{isItPortgueuse ? <li key={index}>{course.title}</li> : <li key={index}>{course.eng_title}</li>}

                                    </>
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