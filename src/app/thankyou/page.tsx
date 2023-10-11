'use client'

import { useEffect, useState } from "react";
import Header from "../components/Header/page"
import Link from "next/link"

import styles from "./ThankYou.module.css"

const ThankYou = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                clearInterval(interval);
                window.location.href = '/';
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <>
            <Header />
            <div className={styles.thanks}>
                <div>
                    <span>
                        Email enviado!
                    </span>
                    <span>Obrigado por entrar em contato, retornarei o mais breve possível!</span>
                    <pre>Atenciosamente: Yuri Cruz França</pre>
                    <p>Você será redirecionado para  <Link href={'/'} className={styles.link}>Home</Link> em {count} segundos...</p>
                </div>
            </div>
        </>
    )
}

export default ThankYou