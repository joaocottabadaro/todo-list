import styles from "./list.module.css"
import plus from "../assets/plus.svg"
import { Item, Todo } from "./item"
import { ChangeEvent, useState } from "react";



const items: Todo[] = [{
    id: 1,
    completed: false,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos eveniet debitis incidunt deserunt dignissimos amet hic ad dicta sit?"
},
{
    id: 2,
    completed: false,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos eveniet debitis incidunt deserunt dignissimos amet hic ad dicta sit?"
},

{
    id: 3,
    completed: true,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos eveniet debitis incidunt deserunt dignissimos amet hic ad dicta sit?"
},


]
export default function List() {
    const [todos, setTodos] = useState<Todo[]>(items);
    const [newTodoContent, setNewTodoContent] = useState("");

    function handleDeleteTodo(selectedTodo: Todo) {

        setTodos(todos.filter((todo) => { return todo.id !== selectedTodo.id }))
    }
    function handleCreateTodo() {

        if (newTodoContent.length > 0)
            setTodos([...todos, { completed: false, content: newTodoContent }])
        else {
            alert("Digite um todo válido")
        }
    }
    function handleNewTodoContent(e: ChangeEvent<HTMLInputElement>) {
        e.target.setCustomValidity("Esse campo é obrigatório");
        setNewTodoContent(e.target.value)
    }
    function handleNewTodoStatus(selectedTodo: Todo) {

        const updateTodos = todos.filter(currentTodo => {
            if (currentTodo === selectedTodo)
                currentTodo.completed = !currentTodo.completed
            return todos;
        })

        setTodos(updateTodos)
    }

    const completedTodos = todos.filter(todo => { return todo.completed; }).length;
    return <div className={styles.list}>

        <div className={styles.listHeader}>    <input placeholder="Adicione uma nova tarefa" onChange={handleNewTodoContent} />
            <button onClick={handleCreateTodo} >Criar <img src={plus} alt="criar" />  </button>
        </div>

        <div className={styles.listInfo}>
            <p>
                Tarefas criadas <span>{todos.length}</span>
            </p>


            <p>Concluidas <span> {completedTodos} de {todos.length}</span></p>
        </div>

        {todos.map(todo => {
            return <Item key={todo.content} item={todo} onDeleteTodo={handleDeleteTodo} onChangeStatus={handleNewTodoStatus} />
        })}

    </div>
}