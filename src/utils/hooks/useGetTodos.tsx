import { useQuery } from "@tanstack/react-query";

type TodoType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'
const headers = { 'Content-type': 'application/json' }

const getTodos = async(): Promise<TodoType[]> => {
  return await (await fetch(baseUrl)).json()
}


export const useGetTodos = () => {
  return useQuery(['todos'], getTodos, {
    refetchOnWindowFocus: false
  })
}