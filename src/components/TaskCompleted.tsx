import { Trash } from 'phosphor-react'
import { PropsTask } from '../models/taskProps'
import styles from './TaskCompleted.module.css'

export function TaskCompleted({ description, onTaskDeleted, onTaskCompleted }: PropsTask) {

    function handleDeleteTask() {
        onTaskDeleted(description) //esse description é como se você o id da tarefa, estou passando como uma forma de identificação única para esxclusão daquela tarefa específica
    }

function handleTaskCheck(){
    onTaskCompleted()
}

    return (
        <main className={styles.contentTask}>
            <label className={styles.description}>
                <input type="radio" onClick={handleTaskCheck} id="task"/>
                <span></span>
                {description}
            </label>
            <button className={styles.buttonTrash} onClick={handleDeleteTask}><Trash size={24} /></button>
        </main>
    )
}