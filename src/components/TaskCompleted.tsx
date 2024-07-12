import { Trash } from 'phosphor-react'
import styles from './TaskCompleted.module.css'
import { PropsTask } from '../models/taskProps'

export function TaskCompleted({description, onTaskDeleted}: PropsTask) {

function handleDeleteTask(){
    onTaskDeleted(description) //esse description é como se você o id da tarefa, estou passando como uma forma de identificação única para esxclusão daquela tarefa específica
}
    return (
        <main className={styles.contentTask}>
           <label className={styles.description}>
            <input type="radio"/>{description}
            </label> 
            <button className={styles.buttonTrash} onClick={handleDeleteTask}><Trash size={24}/></button>
        </main>
    )
}