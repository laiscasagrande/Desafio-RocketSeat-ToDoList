import { Trash } from 'phosphor-react'
import { PropsTask } from '../models/taskProps'
import styles from './TaskCompleted.module.css'
import { useState } from 'react'

export function TaskCompleted({ description, onTaskDeleted, onTaskCompleted }: PropsTask) {

    const [buttonDisabled, setButtonDisabled] = useState(false)

    function handleDeleteTask() {
        onTaskDeleted(description) //esse description é como se você o id da tarefa, estou passando como uma forma de identificação única para esxclusão daquela tarefa específica
    }

    function handleTaskCheck() {
        onTaskCompleted()
        setButtonDisabled(true)
    }

    return (
        <main className={styles.contentTask}>
            <label className={styles.description}>
                <input readOnly type="checkbox" onClick={handleTaskCheck} id="task" />
                <span></span>
                {description}
            </label>
            <button className={styles.buttonTrash} onClick={handleDeleteTask} disabled={buttonDisabled}><Trash size={24} /></button>
        </main>
    )
}