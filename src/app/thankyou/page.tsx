'use client'

import { useEffect, useState } from "react";
import Header from "../components/Header/page"
import Link from "next/link"

import styles from "./ThankYou.module.css"

export function obrigado() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                clearInterval(interval);
                // Redirecionar para a página desejada após a contagem regressiva
                // Substitua 'caminho-da-pagina-b' pela URL real da página B
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

export default obrigado