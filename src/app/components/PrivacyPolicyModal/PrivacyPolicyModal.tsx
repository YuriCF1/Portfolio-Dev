'use client'

import React, { useContext } from 'react';
import styles from './PrivacyPolicyModal.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { LanguageContext } from '@/app/context/toggleConext';

const PrivacyPolicyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen = false, onClose }) => {

    const { language } = useContext(LanguageContext)

    if (!isOpen) {
        return null;
    }

    return (
        <>

            {language === "portuguese" ?
                <div className={styles.modalOverlay} onClick={onClose}>
                    <div className={styles.modalContent}>
                        <h1>Resumo</h1>
                        <p>Em geral, você vai me ajudar muito a saber o quão longe este site está indo, e o quão atrativo ele é {':)'}</p>
                        <h2>Política de Privacidade</h2>
                        <button onClick={onClose} className={styles.closeButton}>
                            <IoMdCloseCircle color="red" size="24px" />
                        </button>
                        <p>Os dados que posso coletar são referentes à sua localização, como cidade ou país de onde você está acessando meu portfólio, já que aplico para empregos internacionais. Posso coletar dados como o tempo em que você passa no meu site, para pode melhorá-lo cada vez mais.
                            Também posso saber quantos eventos você disparou em meu site. Como cliques em botões.
                        </p>
                        <p>A proteção da sua privacidade é muito importante para mim. Esta Política de Privacidade explica como coleto, uso, e protejo suas informações quando você visita meu site.</p>
                        <h3>Informações que Coletamos</h3>
                        <h4>Informações de Navegação</h4>
                        <p>
                            Coletamos informações sobre como você usa nosso site,
                            incluindo as páginas visitadas, o tempo gasto em cada página
                            e outros dados analíticos. Utilizo o Google Analytics para coletar essas informações.
                            Para saber mais sobre como a plataforma coleta e processa dados, consulte a <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidade do Google</a>.
                        </p>
                        <h4>Informações Pessoais</h4>
                        <p>
                            <b>Não coletamos informações pessoais</b> como nome, endereço, e-mail, a menos que você me forneça essas informações voluntariamente através do formulário de contato ou outros meios de comunicação no site.
                        </p>
                        <h3>Uso das Informações</h3>
                        <h4>Para Melhorar Nosso Site</h4>
                        <p>
                            Utilizamos as informações de navegação para entender como os usuários interagem com nosso site e para melhorar a experiência do usuário.
                        </p>
                        <h4>Comunicação</h4>
                        <p>
                            Se você me fornecer suas informações pessoais, posso usá-las para responder às suas perguntas e fornecer suporte.
                        </p>
                        <h3>Compartilhamento de Informações</h3>
                        <p>
                            <u><b>NÃO COMPARTILHO NENHUM DADO PESSOAL</b></u>, apenas se for exigido por lei ou se acredito que tal ação é necessária para cumprir com processos legais.
                        </p>
                        <h3>Cookies e Tecnologias Semelhantes</h3>
                        <p>
                            Utilizo cookies e tecnologias semelhantes para melhorar a experiência do usuário em meu site. Você pode gerenciar suas preferências de cookies através do seu navegador.
                        </p>
                    </div>
                </div>
                :
                <div className={styles.modalOverlay} onClick={onClose}>
                    <div className={styles.modalContent}>
                        <h1>Summary</h1>
                        <p>Overall, you will greatly help me understand how far this site is reaching and how attractive it is {':)'}</p>
                        <h2>Privacy Policy</h2>
                        <button onClick={onClose} className={styles.closeButton}>
                            <IoMdCloseCircle color="red" size="24px" />
                        </button>
                        <p>The data I may collect relates to your location, such as the city or country from where you are accessing my portfolio, as I apply for international jobs. I may collect data such as the time you spend on my site to continuously improve it.
                            I can also track how many events you trigger on my site, such as button clicks.
                        </p>
                        <p>Your privacy protection is very important to me. This Privacy Policy explains how I collect, use, and protect your information when you visit my site.</p>
                        <h3>Information We Collect</h3>
                        <h4>Browsing Information</h4>
                        <p>
                            We collect information about how you use our site,
                            including pages visited, time spent on each page,
                            and other analytical data. I use Google Analytics to collect this information.
                            To learn more about how the platform collects and processes data, please refer to the <a href="https://policies.google.com/privacy" target="_blank">Google Privacy Policy</a>.
                        </p>
                        <h4>Personal Information</h4>
                        <p>
                            <b>We do not collect personal information</b> such as name, address, email, unless you voluntarily provide such information through the contact form or other communication channels on the site.
                        </p>
                        <h3>Use of Information</h3>
                        <h4>To Improve Our Site</h4>
                        <p>
                            We use browsing information to understand how users interact with our site and to enhance user experience.
                        </p>
                        <h4>Communication</h4>
                        <p>
                            If you provide us with your personal information, we may use it to respond to your inquiries and provide support.
                        </p>
                        <h3>Sharing of Information</h3>
                        <p>
                            <u><b>We DO NOT SHARE ANY PERSONAL DATA</b></u>, except when required by law or when I believe such action is necessary to comply with legal processes.
                        </p>
                        <h3>Cookies and Similar Technologies</h3>
                        <p>
                            I use cookies and similar technologies to enhance user experience on my site. You can manage your cookie preferences through your browser.
                        </p>
                    </div>
                </div>
            }
        </>
    );
};

export default PrivacyPolicyModal;
