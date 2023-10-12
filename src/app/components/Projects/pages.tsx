import projects from "../../api/projects.json"
import styles from "./Projects.module.css"
import Image from "next/image"

interface Project {
  title: string;
  description: string;
  img: string;
  altImg: string;
  techs: string[];
  techDescriptions?: string[];
  linkGH: string;
  linkDeploy: string
}

export default function Projects() {
  return (
    <section className={styles.board} id="projetos" data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div className={styles.profileImgContainer}>
        <div className={styles.divProfImage}>
          <Image src='https://github.com/YuriCF1.png' objectFit="cover" layout="fill" alt="Foto de Perfil Yuri Cruz" className={styles.profileImg} />
        </div>
        <ul>
          <li><a href="https://www.linkedin.com/in/yuricf/" target="_blank">
            <img src="/img/icons/linkedin.svg" alt="Ícone Linkedin" />
            <p>Yuri Cruz</p>
          </a></li>
          <li><a href="https://github.com/YuriCF1" target="_blank">
            <img src="/img/icons/github.svg" alt="Ícone GitHub" />
            <p>YuriCF1</p>
          </a></li>
          <li><a href="mailto:yurifdev@gmail.com" target="_blank">
            <img src="/img/icons/email.svg" alt="Ícone GitHub" />
            <p>yurifdev</p>
          </a></li>
          <li><a href="https://wa.me/5582988439390?text=Olá,%20Yuri!" target="_blank">
            <img src="/img/icons/wpp.svg" alt="Ícone Whatsapp" />
            <p>Yuri Cruz</p>
          </a></li>
          <li><a href="https://www.linkedin.com/in/yuricf/" target="_blank">
            <img src="/img/icons/telephone.svg" alt="Ícone Telefone" />
            <p>Yuri Cruz</p>
          </a></li>
        </ul>
        <p>Frontend dev. HTML/CSS/JS/TS/React/MongoDB/Firebase. User of design Figma, Blender, Photoshop and Premiere.</p>
      </div>
      <div className={styles.cardSection}>
        {projects.projects.map((project: Project, index: number) => (
          <ul className={styles.title} key={project.title}>
            <li>
              <strong className={styles.cardTitle}>Título:</strong> <p>{project.title}</p>
            </li>
            <li>
              <strong>Descrição:</strong> <p>{project.description} </p>
            </li>
            {/* Tem que fazer isso para que o tamanho da imagem abaixo consiga ser modificada pelo css */}
            <div className={styles.divImage} >
              <Image src={project.img} alt={project.altImg} objectFit="cover" layout="fill" className={styles.exampleImg} />
            </div>
            <li className={styles.techsContainer}>
              <strong>Tecnologias:</strong>
              <div>
                {project.techs.map((tech) => (
                    <img key={project.techDescriptions![index]} src={tech} alt={project.techDescriptions && project.techDescriptions[index] ? project.techDescriptions[index] : 'Descrição da tecnologia'} className={styles.techs} />
                  ))}
              </div>
            </li>
            <li className={styles.techsContainer}>
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
    </section>
  )
}
