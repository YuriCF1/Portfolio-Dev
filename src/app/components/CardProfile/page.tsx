'use client'

import profilePic from "../../../../public/img/Profile.jpg"
import Image from "next/legacy/image"
import styles from "./CardProfile.module.css"
import { LanguageContext } from "@/app/context/toggleConext"
import { useContext } from "react"

const CardProfile = () => {
    const { language } = useContext(LanguageContext)

    return (
        <div className={styles.profileImgContainer}>
            <div className={styles.divProfImage}>
                <a href="https://wa.me/5582988439390?text=Olá,%20Yuri!" target="_blank">
                    {/* <Image src='https://github.com/YuriCF1.png' objectFit="cover" layout="fill" alt="Foto de Perfil Yuri Cruz" className={styles.profileImg} /> */}
                    <Image src={profilePic} objectFit="cover" layout="fill" alt="Foto de Perfil Yuri Cruz" className={styles.profileImg} />
                </a>
            </div>
            <ul>
                <li><a href="https://www.linkedin.com/in/yuricf/" target="_blank">
                    <img src="/img/icons/linkedin.svg" alt={language && language === "portuguese" ? "Ícone Linkedin" : "Linkedin Icon"} />
                    <p>Yuri Cruz</p>
                </a></li>
                <li><a href="https://github.com/YuriCF1" target="_blank">
                    <img src="/img/icons/github.svg" alt={language && language === "portuguese" ? "Ícone GitHub" : "GitHub Icon"} />
                    <p>YuriCF1</p>
                </a></li>
                <li><a href="mailto:yurifdev@gmail.com" target="_blank">
                    <img src="/img/icons/email.svg" alt={language && language === "portuguese" ? "Ícone Email" : "Email Icon"} />
                    <p>yurifdev</p>
                </a></li>
                <li><a href="https://wa.me/5582988439390?text=Olá,%20Yuri!" target="_blank">
                    <img src="/img/icons/wpp.svg" alt={language && language === "portuguese" ? "Ícone Whatsapp" : "Whatsapp Icon"} />
                    <p>Yuri Cruz</p>
                </a></li>
                <li><a href="https://www.linkedin.com/in/yuricf/" target="_blank">
                    <img src="/img/icons/telephone.svg" alt={language && language === "portuguese" ? "Ícone Telefone" : "Smartphone Icon"} />
                    <p>Yuri Cruz</p>
                </a></li>
            </ul>
            <p>{language === "portuguese" ?
                "Des. Frontend HTML/CSS/JS/TS/Next/React/Angular/Vue/MySQL/MongoDB/Firebase. Usuário do Figma, Blender, Photoshop e Premiere."
                : "Frontend dev. HTML/CSS/JS/TS/Next/React/Angular/Vue/MySQL/MongoDB/Firebase. User of design Figma, Blender, Photoshop and Premiere."}</p>
        </div>
    )
}

export default CardProfile