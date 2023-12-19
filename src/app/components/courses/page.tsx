import styles from "./courses.module.css"

import course from "../../api/courses-eng-titles.json"

interface Course {
    title: string;
}

const Courses = () => {
    return (
        <>
            <div data-aos="fade-down" data-aos-duration="5000" id="cursos">
                <h2 className={styles.titulo}>Cursos realizados</h2>
                <div className={styles.container}>
                    <div className={styles.columnWrapper}>
                        <ul>
                            {
                                course.courses.map((course: Course, index: number) => (
                                    <>
                                        <li key={index}>{course.title}</li>
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