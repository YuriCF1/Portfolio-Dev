import projects from "../../api/projects.json"
import styles from "./Projects.module.css"
import Image from "next/image"

interface Project {
  title: string;
  description: string;
  img?: string;
  altImg?: string;
  techs?: string[];
  techDescriptions?: string[];
  linkGH: string;
  linkDeploy: string
}

export default function Projects() {
  return (
    <section className={styles.board}>
      <div>
        <Image src='https://github.com/YuriCF1.png' alt="Foto de Perfil Yuri Cruz" width={300} height={300} className={styles.profileImg} />
      </div>
      <div className={styles.cardSection}>
        {projects.projects.map((project: Project, index: number) => (
          <ul>
            <li>
              <strong className={styles.cardTitle}>Título:</strong> <p>{project.title}</p>
            </li>
            <li>
              <strong>Descrição:</strong> <p>{project.description} </p>
            </li>
            {project.img && <Image src={project.img} alt={project.altImg ? project.altImg : 'Foto exemplo do projeto'} width={300} height={168.75} className={styles.exampleImg} />}
            <li className={styles.techsContainer}>
              <strong>Tecnologias:</strong>
              <div>
                {project.techs &&
                  project.techs.map((tech) => (
                    <img src={tech} alt={project.techDescriptions && project.techDescriptions[index] ? project.techDescriptions[index] : 'Descrição da tecnologia'} className={styles.techs} />
                  ))}
              </div>
            </li>
            <li className={styles.techsContainer}>
              <strong>Deploys:</strong>
              <a href={project.linkGH}>
                <Image src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="Ícone do GitHub" width={25} height={25} className={styles.techs} />
              </a>
              <a href={project.linkGH}>
                <Image src='/img/svg-internet.svg' alt="Ícone do GitHub" width={25} height={25} className={styles.techs} />
              </a>
            </li>
          </ul>
        ))}
      </div>
    </section>
  )
}
