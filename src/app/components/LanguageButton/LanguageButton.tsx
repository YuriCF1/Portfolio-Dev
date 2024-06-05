'use client'

import Image from "next/image"

import styles from "./LanguageButton.module.css"
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/app/context/toggleConext";

import EnglishImage from "/public/English.jpg";
import PortugueseImage from "/public/Portuguese.jpg";

export function LanguageButton() {
    const [isToggled, setIsToggled] = useState(true);

    const { language, setLanguage } = useContext(LanguageContext)

    useEffect(() => {
        setLanguage(isToggled ? "portuguese" : "english")
    }, [isToggled])

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    return (
        <>
            <div className={styles.bandeiras}>
                <button
                    className={`${styles.toggleButton} ${isToggled ? styles.toggled : ""}`}
                    onClick={handleToggle}
                >
                    <div className={styles.toggleContent}>
                        <div className={`${styles.toggleBall} ${isToggled ? styles.toggled : ""}`}></div>
                        {isToggled ?
                            <Image
                                src={PortugueseImage}
                                alt="Portuguese"
                                width={30}
                                height={21.0}
                                className={`${styles.toggleImage} ${styles.portFlag}`}
                            /> :
                            <Image
                                src={EnglishImage}
                                alt="English"
                                width={30}
                                height={21.0}
                                className={`${styles.toggleImage} ${styles.engFlag}`}
                            />
                        }
                    </div>
                </button>
            </div>
        </>
    )
}

export default LanguageButton
