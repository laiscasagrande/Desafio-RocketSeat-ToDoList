import { taskDetails } from "./taskDetails"

export interface PropsTask {
    description: string,
    onTaskDeleted: (id: number) => void
    onTaskCompleted: (id: number) => void
    data: taskDetails
}