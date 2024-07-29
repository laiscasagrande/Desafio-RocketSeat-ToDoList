import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskCompleted } from './TaskCompleted'
import { TaskNotRegistered } from './TaskNotRegistered'
import { taskDetails } from '../models/taskDetails'

export function CreateText() {
    const [tasks, setTasks] = useState<taskDetails[]>([])
    const [newTask, setNewTask] = useState('')

    const [countTask, setCountTask] = useState(0)
    const [taskCheck, setTaskCheck] = useState(0)

    function handleNewTask(event: FormEvent) { //função responsável por "guardar a tarefa"

        const handleNewTasks: taskDetails = {
            id: new Date().getTime(), //é uma maneira simples de gerar um id único sem precisar de bibliotecas externas. Este método gera um número diferente a cada milissegundo
            description: newTask,
            isChecked: false,
        }

        event.preventDefault()
        setTasks([...tasks, handleNewTasks]) //Dessa forma, ele pegará todas as tarefas já existentes, além de me trazer o id gerado, a newTask, que é o texto digitado, e isChecked como false da nova tarefa criada
        setNewTask('')
        countTasksPendants()
    }

    function handleCreateNewTask(event: ChangeEvent<HTMLInputElement>) { //função responsável por "pegar a tarefa"
        setNewTask(event.target.value)
    }

    function deleteTask(id: number) {
        const allTasksWithoutDeleted = tasks.filter(task => {
            return task.id !== id //ele vai retonar somente as tarefas que possuem o id diferente daquele id que foi clicado para ser removido
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

    function countTaskCompleted() {
        setTaskCheck((count) => {
            return count + 1
        })
    }

    return (
        <main className={styles.containerPrincipal}>
            <form className={styles.content} onSubmit={handleNewTask}>
                <input className={styles.inputCreateTask} type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={handleCreateNewTask} />
                <button className={styles.buttonCreate} type="submit">Criar <PlusCircle size={20} /></button>
            </form>
            <main className={styles.task}>
                <section className={styles.contentCount}>
                    <div className={styles.count}>
                        <p className={styles.pending}>Tarefas criadas</p>
                        <div className={styles.amount}>{countTask}</div>
                    </div>
                    <div className={styles.count}>
                        <p className={styles.completed}>Concluídas</p>
                        <div className={styles.amount}>{taskCheck} de {countTask}</div>
                    </div>
                </section>
                <section className={styles.tasks}>
                    {tasks.length > 0 ?
                        tasks.map((task) => {
                            return <TaskCompleted key={task.id} description={task.description} onTaskDeleted={deleteTask} onTaskCompleted={countTaskCompleted} data={task} />
                        })
                        : <TaskNotRegistered />}
                </section>
            </main>
        </main>
    )
}