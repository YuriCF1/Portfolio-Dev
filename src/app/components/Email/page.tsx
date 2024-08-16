'use client'

import { LanguageContext } from "@/app/context/toggleConext";
import styles from "./Email.module.css"
import { useContext } from "react";
import sendEmail from '../../services/sendEmail';
import { useState } from "react";

export function Email() {
    const { language, setLanguage } = useContext(LanguageContext)

    const [formData, setFormData] = useState({
        nome: '',
        numero: '',
        email: '',
        mensagem: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await sendEmail(formData);
            alert('Email enviado com sucesso!');
        } catch (error) {
            alert('Erro ao enviar email. Tente novamente.');
        }
    };

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className={styles.contato}>
            <section className={styles.callToAction}>
                <p>
                    {language === "portuguese" ? 'Posso ajudar em algo, ou tens alguma dúvida? Me manda uma mensagem!'
                        : 'Can I help you with something else, do you have any question? Send an email!'}
                </p>
            </section>
            <form onSubmit={handleSubmit} className={styles.contato_container}>
                <h4 id="contato">{language === "portuguese" ? 'Contato' : 'Contact'}</h4>
                <div className={styles.contato_texto}>
                    <label htmlFor="nomesobrenome">{language === "portuguese" ? 'Nome e Sobrenome:' : 'Name and surname:'} </label>
                    <input
                        className={styles.contato_texto__inputs}
                        type="text"
                        id="nomesobrenome"
                        name="nome"
                        required
                        placeholder={language === "portuguese" ? 'Seu nome aqui...' : 'Your name here...'}
                        onChange={handleChange}
                    />

                    <label htmlFor="numero">{language === "portuguese" ? 'Número:' : 'Number:'} </label>
                    <input
                        className={styles.contato_texto__inputs}
                        type="text"
                        id="numero"
                        name="numero"
                        required
                        placeholder={language === "portuguese" ? 'Seu número aqui...' : 'Your number here...'}
                        onChange={handleChange}
                    />

                    <label htmlFor="email">Email: </label>
                    <input
                        className={styles.contato_texto__inputs}
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={language === "portuguese" ? 'seuemail@domínio.com' : 'youremail@domain.com'}
                        onChange={handleChange}
                    />

                    <label htmlFor="mensagem">{language === "portuguese" ? 'Mensagem:' : 'Message:'} </label>
                    <textarea
                        className={styles.contato_texto__inputs}
                        id="mensagem"
                        name="mensagem"
                        required
                        placeholder={language === "portuguese" ? 'Sua mensagem aqui...' : 'Your message here...'}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">{language === "portuguese" ? 'Enviar' : 'Send'}</button>
                </div>
            </form>
        </div>
    );
};

export default Email;
