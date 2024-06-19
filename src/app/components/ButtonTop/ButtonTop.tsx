import Image from "next/legacy/image"

import styles from "./Arrow.module.css"

export function ButtonTop() {
    return (
            <a className={styles.arrow} href="#home">
                <Image src="/img/icons/arrow.svg" title="Logo da escritório" alt="Ícone de seta para cima" width={50} height={50} priority={true} />
            </a>
    )
}

export default ButtonTop
