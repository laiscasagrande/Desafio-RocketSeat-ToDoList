export interface PropsTask {
    description: string,
    onTaskDeleted: (description: string) => void
}