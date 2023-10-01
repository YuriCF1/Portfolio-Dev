import styles from "./About.module.css"


export function About() {
    return (<>
        <section>
            <div className={styles.sobre_container} id="sobre">
                <h2 className={styles.sobre_titulo}>Quem sou eu</h2>
                <div className={styles.versaoPC}>
                    <p className={`${styles.sobre_texto} ${styles.typing_animation}`} id="servicos">Olá! Me chamo Yuri.
                        Sou Freelancer
                        trabalhando em
                        Web-Design,
                        edição de vídeo e fotografias. E amo tudo isso {`=)`}
                    </p>
                </div>
                <div className={styles.versaoMob}>
                    <p className={`${styles.sobre_texto2} ${styles.typing_animation1}`} id="servicos">Olá! Me chamo
                        Yuri. Sou Freelancer</p>
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation2}`}>trabalhando em
                        Web-Design,</p>
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation3}`}>edição de vídeo e fotografias.</p >
                    <p className={`${styles.sobre_texto3} ${styles.typing_animation4}`}> E amo tudo isso =)
                    </p >
                </div >
            </div >
        </section >
    </>)

}

export default About