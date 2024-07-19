import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskCompleted } from './TaskCompleted'
import { TaskNotRegistered } from './TaskNotRegistered'

export function CreateText() {
    const [tasks, setTasks] = useState(['Tarefa Inicial'])
    const [newTask, setNewTask] = useState('')
    const [countTask, setCountTask] = useState(0)

    function handleNewTask(event: FormEvent) { //função responsável por "guardar a tarefa"
        event.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
        countTasksPendants()
    }

    function handleCreateNewTask(event: ChangeEvent<HTMLInputElement>) { //função responsável por "pegar a tarefa"
        setNewTask(event.target.value)
    }

    function deleteTask(taskDeleted: string) {
        const allTasksWithoutDeleted = tasks.filter(task => {
            return task !== taskDeleted
        })
        setTasks(allTasksWithoutDeleted)
        countTasksDeleteds()
    }

    function countTasksPendants() {
        setCountTask((count) => {
            return count + 1
        })
    }

    function countTasksDeleteds() {
        setCountTask((count) => {
            return count - 1
        })
    }

    return (
        <>
            <form className={styles.content} onSubmit={handleNewTask}>
                <input className={styles.inputCreateTask} type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={handleCreateNewTask} />
                <button className={styles.buttonCreate} type="submit">Criar <PlusCircle size={20} /></button>
            </form>
            <main className={styles.task}>
                <section className={styles.content}>
                    <div className={styles.count}>
                        <p className={styles.pending}>Tarefas criadas</p>
                        <div className={styles.amount}>{countTask}</div>
                    </div>
                    <div className={styles.count}>
                        <p className={styles.completed}>Concluídas</p>
                        <div className={styles.amount}>2 de {countTask}</div>
                    </div>
                </section>
                <section className={styles.tasks}>
                    {tasks.length > 0 ?
                        tasks.map((task) => {
                            return <TaskCompleted key={task} description={task} onTaskDeleted={deleteTask} />
                        })
                        : <TaskNotRegistered />}
                </section>
            </main>
        </>
    )
}