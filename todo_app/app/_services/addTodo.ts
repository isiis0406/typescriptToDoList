import { TodoType } from "../_typescript/Todo";


async function addTodo(endpoint: string,data: TodoType): Promise<TodoType> {
    const BaseUrl = 'https://dummyjson.com'
    try {
        const response = await fetch(`${BaseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const todo = await response.json()
        return todo
    } catch (e) {
        console.error(e)
        return data
    }
}

export { addTodo }