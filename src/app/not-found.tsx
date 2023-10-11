import Link from 'next/link'
import styles from "./not-found.module.css"
import Header from './components/Header/page'
 
export default function NotFound() {
    return (
        <>
            <Header />
            <div className={styles.notFound}>
                <div>
                    <h1>404</h1>
                    <span>
                        Ops, página não encontrada...
                    </span>
                    <p>Volte para a <Link href={'/'} className={styles.link}>Home</Link></p>
                </div>
            </div>
        </>
    )
}