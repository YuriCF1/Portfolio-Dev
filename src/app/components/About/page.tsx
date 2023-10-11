import styles from "./About.module.css"


export function About() {
    return (<>
        <section>
            <div className={styles.sobre_container} id="sobre">
                <h2 className={styles.sobre_titulo}>Quem sou eu</h2>
                <div className={styles.versaoPC}>
                    <p className={`${styles.sobre_texto} ${styles.typing_animation}`} id="servicos">Olá! Me chamo Yuri.
                        Sou Desenvolvedor frontend
                        com conhecimento em backend,
                        e pretendo ser um exímio fullstack developer. E amo tudo isso {`=)`}
                    </p>
                </div>
                <div className={styles.versaoMob}>
                    <p className={`${styles.sobre_texto2} ${styles.typing_animation1}`} id="servicos">Olá! Me chamo Yuri.
                        Sou Desenvolvedor frontend</p>
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation2}`}>com conhecimento em backend, e pretendo</p>
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation3}`}> ser um exímio fullstack developer.</p >
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation4}`}> E amo tudo isso =)
                    </p >
                </div >
            </div >
        </section >
    </>)

}

export default About