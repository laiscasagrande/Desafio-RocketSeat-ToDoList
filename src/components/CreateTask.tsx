import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css'

export function CreateText() {
    return (
        <main className={styles.content}>
            <input type="text" placeholder="Adicionar tarefa..." />
            <button>Criar <PlusCircle size={20} /></button>
        </main>
    )
}