import styles from './TaskNotRegistered.module.css'
import clipboard from '../assets/Clipboard.svg'

export function TaskNotRegistered() {
    return (
        <main className={styles.content}>
            <img src={clipboard} alt="Imagem de um caderno de anotações"/>
            <div>
                <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </main>
    )
}