'use client'

import { LanguageContext } from "@/app/context/toggleConext";
import styles from "./Email.module.css"
import { useContext } from "react";

export function Email() {
    const { language, setLanguage } = useContext(LanguageContext)

    return (
        <>
            <div data-aos="fade-up" data-aos-duration="1000" className={styles.contato}>
                <section className={styles.callToAction}>
                    <p>
                        {language === "portuguese" ? 'Posso ajudar em algo, ou tens alguma dúvida? Me manda uma mensagem!'
                            : 'Can I help you with something else, do you have any question? Send an email!'}
                    </p>
                </section>
                <form action="https://formsubmit.co/yurifdev@gmail.com" method="POST"
                    className={styles.contato_container}>
                    <h4 id="contato">{language === "portuguese" ? 'Contato' : 'Contact'}</h4>
                    <div className={styles.contato_texto}>
                        <label htmlFor="nomesobrenome">{language === "portuguese" ? 'Nome e Sobrenome:' : 'Name and surname:'} </label>
                        <input className={styles.contato_texto__inputs} type="text" id="nomesobrenome"
                            name="nome" required
                            placeholder={language === "portuguese" ? 'Seu nome aqui...' : 'Your name here...'} />

                        <label htmlFor="email">Email: </label>
                        <input className={styles.contato_texto__inputs} type="email" id="email" name="email"
                            required
                            placeholder={language === "portuguese" ? 'seuemail@domínio.com' : 'youremail@domain.com'} />

                        <label htmlFor="telefone">{language === "portuguese" ? 'Telefone' : 'Phone number'}: </label>
                        <input className={styles.contato_texto__inputs} type="tel" id="telefone"
                            name="telefone" maxLength={18} required
                            placeholder={language === "portuguese" ? 'Seu número' : 'Your phone number'} />
                        {/* placeholder="Seu número" onkeypress="maascaraDeTelefone(this)"/> */}

                        <label className={styles.mensagem} htmlFor="mensagem">{language === "portuguese" ? 'Mensagem' : 'Message'}:</label>
                        <textarea className={`${styles.contato_texto__inputs} ${styles.emailMessage}`} name="maessage" id="mensagem" maxLength={1000}
                            placeholder={language === "portuguese" ? 'Escreva aqui o que desejas' : 'Type here what you need'} required ></textarea>
                        <input type="hidden" name="_next" value="https://portfolio-dev-kappa-liart.vercel.app/thankyou"></input>
                        <input type="submit" className={`${styles.enviar} ${styles.submit}`} value={language === "portuguese" ? 'Enviar' : 'Send'} name="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Email;
