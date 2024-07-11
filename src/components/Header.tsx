import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export function Header(){
    return(
        <section className={styles.header}>
            <div>
                <img src={logo} alt="Logo da aplicação"/>
            </div>
        </section>
    )
}