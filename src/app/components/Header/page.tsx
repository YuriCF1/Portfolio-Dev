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
        <nav className={styles.cabecalho_navegacao}>
          <ul className={styles.cabecalho_links}>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="index.html">Home</a></li>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#servicos_titulo">Servicos</a> </li>
            <li className={styles.listItem}><a className={styles.cabecalho_itens} href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
