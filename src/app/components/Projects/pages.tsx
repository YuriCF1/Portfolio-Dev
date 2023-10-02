import projects from "../../api/projects.json"
import styles from "./Projects.module.css"
import Image from "next/image"

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export default function Projects() {
  return (
    <section className={styles.board}>
      <div>
        <Image src='https://github.com/YuriCF1.png' alt="Foto de Perfil Yuri Cruz" width={300} height={300} className={styles.profileImage} />
      </div>
      <div className={styles.cardSection}>
        {projects.projects.map((project: Project, index: number) => (
          <li key={index} >
            <strong className={styles.cardTitle}>Título:</strong> <p>{project.title}</p>
            <strong>Descrição:</strong> <p>{project.description} </p>
            <strong>Tecnologias:</strong> {project.technologies.join(', ')}
          </li>
        ))}
      </div>
    </section>
  )
}