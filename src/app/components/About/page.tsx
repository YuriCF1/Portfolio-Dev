'use client'

import { useContext, useEffect, useState } from "react"
import styles from "./About.module.css"
import { LanguageContext } from "@/app/context/toggleConext"

export function About() {

    const [paraCursor, setParaCursor] = useState(false)

    const { language, setLanguage } = useContext(LanguageContext)

    useEffect(() => {
        setTimeout(() => {
            setParaCursor(true)
        }, 7000);
    }, [])

    return (<>
        <section>
            <div className={styles.sobre_container} id="sobre">
                <h2 className={styles.sobre_titulo}>Quem sou eu</h2>
                <div className={styles.versaoPC}>
                    <p className={paraCursor ? `${styles.sobre_texto} ${styles.borda_transparente}` : `${styles.sobre_texto} ${styles.typing_animationDesktop1}`} id="servicos">Olá! Me chamo Yuri.
                        Sou Desenvolvedor Frontend
                        com conhecimento também em Backend,
                        e pretendo ser um exímio Fullstack/Mobile Developer.
                    </p>
                    <p className={`${styles.sobre_texto} ${styles.typing_animationDesktop2}`} >E amo tudo isso {`=)`}</p>
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