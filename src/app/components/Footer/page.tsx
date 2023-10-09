import styles from "./Footer.module.css"

export function Footer() {
    const ano = new Date()
    const anoString = ano.getFullYear().toString()

    return (
        <footer className={styles.rodape_container}>
            <div className={styles.rodape_conteudo}>
                <img className={styles.logo_yc} src="assets/img/logoPequeno.png" alt="Logo do
						escritório" title="Logo do escritório" />
                <ul className={styles.rodape_lista}>
                    <li><a href="https://github.com/YuriCF1" target="_blank" rel="noopener
								noreferrer"><img className={styles.logo_git}
                            src="assets/img/github.png" alt="Perfil no GitHub" /></a></li>
                    <li><a href="https://www.linkedin.com/in/yf19/" target="_blank"
                        rel="noopener noreferrer"><img
                            className={styles.logo_git} src="assets/img/linkedin.png" alt="Perfil no GitHub" /></a></li>
                </ul>
            </div>
            <p className={styles.copyright}>&copy; Todos os direitos reservados - {anoString}</p>
        </footer>
    )
}

export default Footer