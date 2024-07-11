import styles from './Task.module.css'

export function Task() {
    return (
        <main className={styles.task}>
            <section className={styles.content}>
                <div className={styles.count}>
                    <p className={styles.pending}>Tarefas criadas</p>
                    <div className={styles.amount}>0</div>
                </div>
                <div className={styles.count}>
                    <p className={styles.completed}>Concluídas</p>
                    <div className={styles.amount}>0</div>
                </div>
            </section>
            <section className={styles.tasks}>
                <div>oiii</div>
                <div>oiii</div>
                <div>oiii</div>
                <div>oiii</div>
                <div>oiii</div>
                <div>oiii</div>
            </section>
        </main>
    )
}