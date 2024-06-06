'use client'

import { MouseEventHandler, useContext, useEffect, useState } from "react"
import s from "./Moda.module.css"
import { LanguageContext } from "@/app/context/toggleConext"

const Modal = () => {
    const [modal, setModal] = useState(false)

    const { language } = useContext(LanguageContext)

    useEffect(() => {
        setTimeout(() => {
            setModal(true)
        }, 9000)
    }, [])

    function handleModal(): MouseEventHandler<HTMLButtonElement> | void {
        setModal(false)
    }

    return (
        <div className={`${modal ? s.modalYes : s.modalNo}`}>
            <div className={s.container2}>
                <h2>{language === "portuguese" ? 'Atenção!' : "Notice!"}</h2>
                <p>{language === "portuguese"
                    ? 'Esse site foi feito inteiramente por mim, sem copiar templates aleatórias na internet'
                    : "This website was made entirely by my own, without using any random templates from internet."}</p>
                <strong>{language === "portuguese" ? 'Utilizei o framework Next :)' : "I built it using Next.js :)"}</strong>
                <button onClick={handleModal}>{language === "portuguese" ? 'Legal!' : "Nice!"}</button>
            </div>
        </div>
    )
}

export default Modal