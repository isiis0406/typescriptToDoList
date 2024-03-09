import { TodoType } from '../_typescript/Todo'

async function getTodos(endpoint : string): Promise<TodoType[]> {
    const BaseUrl = 'https://dummyjson.com'
    try{
        const response = await fetch(`${BaseUrl}/${endpoint}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()        
        return data.todos
    }catch(e){
        console.error(e)
        return []
    }
}

export { getTodos }