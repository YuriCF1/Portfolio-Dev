import styles from "./courses.module.css"

import course from "../../api/courses-eng-titles.json"

interface Course {
    title: string;
}

const Courses = () => {
    return (
        <div>
            {
                course.courses.map((course: Course, index: number) => (
                    <div>
                        <p key={index}>{course.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Courses