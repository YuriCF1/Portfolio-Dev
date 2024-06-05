'use client'

import { useContext, useEffect, useState } from "react"
import stylesPortuguese from "./About.module.css"
import stylesEng from "./AboutEng.module.css"
import { LanguageContext } from "@/app/context/toggleConext"

export function About() {
    const { language, setLanguage } = useContext(LanguageContext)


    return (<>
        <section>
            <div className={stylesPortuguese.sobre_container} id="sobre">
                {language === "portuguese" ?
                    <div>
                        {/* ____________________________________________VERSÃO DESKTOP - PORT____________________________________________ */}
                        <h2 className={stylesPortuguese.sobre_titulo}>Quem sou eu</h2>
                        <div className={stylesPortuguese.versaoPC}>
                            <p className={`${stylesPortuguese.sobre_texto} ${stylesPortuguese.typing_animationDesktop1}`} id="servicos">Olá! Me chamo Yuri.
                                Sou Desenvolvedor Frontend
                                com conhecimento também em Backend,
                                e pretendo ser um exímio Fullstack/Mobile Developer.
                            </p>
                            <p className={`${stylesPortuguese.sobre_texto} ${stylesPortuguese.typing_animationDesktop2}`} >E amo tudo isso {`=)`}</p>
                        </div>
                        {/* ____________________________________________VERSÃO MOBILE - PORT____________________________________________ */}
                        <div className={stylesPortuguese.versaoMob}>
                            <p className={`${stylesPortuguese.sobre_texto2} ${stylesPortuguese.typing_animation1}`} id="servicos">Olá! Me chamo Yuri.
                                Sou Desenvolvedor Frontend</p>
                            <p className={`${stylesPortuguese.sobre_texto3} ${stylesPortuguese.typing_animation2}`}>com conhecimento em backend, e pretendo</p>
                            <p className={`${stylesPortuguese.sobre_texto3} ${stylesPortuguese.typing_animation3}`}> ser um exímio fullstack developer.</p >
                            <p className={`${stylesPortuguese.sobre_texto3} ${stylesPortuguese.typing_animation4}`}> E amo tudo isso {`=)`}</p >
                        </div >
                    </div>
                    :
                    <div>
                        {/* ____________________________________________VERSÃO DESKTOP - ENG____________________________________________ */}
                        <h2 className={stylesEng.sobre_titulo}>About Me</h2>
                        <div className={stylesEng.versaoPC}>
                            <p className={`${stylesEng.sobre_texto} ${stylesEng.typing_animationDesktop1}`} id="servicos">
                                Hello there! My name is Yuri, I'm a Frontend Developer with also some experience on backend,
                                and I want to become an amazing FullStack/Mobile Developer
                            </p>
                            <p className={`${stylesEng.sobre_texto} ${stylesEng.typing_animationDesktop2}`} >And I love all that {`=)`}</p>
                        </div>
                        {/* ____________________________________________VERSÃO MOBILE - ENG____________________________________________ */}
                        <div className={stylesEng.versaoMob}>
                            <p className={`${stylesEng.sobre_texto2} ${stylesEng.typing_animation1English}`} id="servicos">Hello there! My name is Yuri,</p>
                            <p className={`${stylesEng.sobre_texto3} ${stylesEng.typing_animation2English}`}>I'm a Frontend Developer</p>
                            <p className={`${stylesEng.sobre_texto3} ${stylesEng.typing_animation3English}`}>with also some experience on backend,</p>
                            <p className={`${stylesEng.sobre_texto3} ${stylesEng.typing_animation4English}`}>and I want to become an amazing</p >
                            <p className={`${stylesEng.sobre_texto3} ${stylesEng.typing_animation5English}`}>FullStack/Mobile Developer.</p >
                            <p className={`${stylesEng.sobre_texto3} ${stylesEng.typing_animation6English}`}>And I love all that {`=)`}</p >
                        </div >
                    </div>
                }
            </div >
        </section >
    </>)
}

export default About