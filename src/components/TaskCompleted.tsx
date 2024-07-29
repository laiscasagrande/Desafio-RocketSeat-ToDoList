import {Trash } from 'phosphor-react'
import { PropsTask } from '../models/taskProps'
import styles from './TaskCompleted.module.css'
import { useState } from 'react'

export function TaskCompleted({data, description, onTaskDeleted, onTaskCompleted }: PropsTask) {

    const [buttonDisabled, setButtonDisabled] = useState(false)

    function handleDeleteTask() {
        onTaskDeleted(data.id) //esse description é como se você o id da tarefa, estou passando como uma forma de identificação única para esxclusão daquela tarefa específica
    }

    function handleTaskCheck() {
        onTaskCompleted({id: data.id, trueOrFalse: !data.isChecked})
        setButtonDisabled(true)
    }

    return (
        <main className={styles.contentTask}>
            <label className={styles.description}>
                <input readOnly type="checkbox" onClick={handleTaskCheck} id="task" checked={data.isChecked}/>  
                <span></span>
                {description}
            </label>
            <button className={styles.buttonTrash} onClick={handleDeleteTask} disabled={buttonDisabled}><Trash size={24} /></button>
        </main>
    )
}