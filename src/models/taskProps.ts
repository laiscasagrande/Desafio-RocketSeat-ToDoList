import { taskDetails } from "./taskDetails"

export interface PropsTask {
    description: string,
    onTaskDeleted: (id: number) => void
    onTaskCompleted: ({id, trueOrFalse}: {id: number, trueOrFalse: boolean}) => void
    data: taskDetails
}