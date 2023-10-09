import styles from "./Email.module.css"

export function Email() {
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="1000" className={styles.contato}>
                <section className={styles.callToAction}>
                    <p>
                        Posso ajudar em algo, ou tens alguma dúvida? Me manda uma mensagem!
                    </p>
                </section>
                <form action="/php/enviar-email.php" method="POST"
                    className={styles.contato_container}>
                    <h4 id="contato">Contato</h4>
                    <div className={styles.contato_texto}>
                        <label htmlFor="nomesobrenome">Nome e Sobrenome: </label>
                        <input className={styles.contato_texto__inputs} type="text" id="nomesobrenome"
                            name="nome" required
                            placeholder="Seu nome aqui..." />

                        <label htmlFor="email">Email: </label>
                        <input className={styles.contato_texto__inputs} type="email" id="email" name="email"
                            required
                            placeholder="seuemail@domínio.com" />

                        <label htmlFor="telefone">Telefone: </label>
                        <input className={styles.contato_texto__inputs} type="tel" id="telefone"
                            name="telefone" maxLength={18} required
                            placeholder="Seu número" />
                        {/* placeholder="Seu número" onkeypress="maascaraDeTelefone(this)"/> */}

                        <label className={styles.mensagem} htmlFor="mensagem">Mensagem:</label>
                        <textarea className={`${styles.contato_texto__inputs} ${styles.emailMessage}`} id="mensagem" maxLength={1000}
                            placeholder="Escreva aqui o que desejas" required ></textarea>
                        <input type="submit" className={`${styles.enviar} ${styles.submit}`} value="Enviar" name="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Email;
