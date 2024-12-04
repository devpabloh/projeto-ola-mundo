import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/foto-pablo-henrique.png"

export default function Banner () {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá mundo!
                </h1>
                <p className={styles.paragrafo}>
                Boas vindas ao meu espaço pessoal! Eu sou Pablo Henrique, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="" 
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto} 
                    alt="Foto de Pablo Henrique sorrindo" />
            </div>
        </div>
    )
}

