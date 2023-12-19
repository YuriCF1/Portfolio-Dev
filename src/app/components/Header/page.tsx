import Image from "next/image"
import styles from "./Header.module.css"

export function Header() {
  return (
    <header>
      <div className={styles.cabecalho_container}>
        <h1>
          <Image src="/assets/img/logo5.png" title="Logo da escritório" alt="Logo do
						escritório"
            className={styles.cabecalho_logo} width={215} height={93} priority={true} />
        </h1>
        <nav className={styles.cabecalho_navegacao} id="home">
          <ul className={styles.cabecalho_links}>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#home">Home</a></li>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#projetos">Projetos</a> </li>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#contato">Contato</a></li>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#cursos">Cursos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
