import uncheckedLogo from "../assets/unchecked.svg"
import checkedLogo from "../assets/checked.svg"
import checkedHoverLogo from "../assets/checkedHover.svg"
import uncheckedHoverLogo from "../assets/uncheckedHover.svg"
import trash from "../assets/trash.svg"
import trashHover from "../assets/trashHover.svg"
import styles from "./item.module.css"
import { useState } from "react"


export interface Todo {
    id?: number
    completed: boolean;
    content: string;
}
export interface ItemProps {
    item: Todo;
    onDeleteTodo: (Todo: Todo) => void
    onChangeStatus: (Todo: Todo) => void
}
export function Item({ item, onDeleteTodo, onChangeStatus }: ItemProps) {

    const isChecked = item.completed
    const [currentSVG, setCurrentSVG] = useState(isChecked ? checkedLogo : uncheckedLogo)
    const [isHoveringTrash, setIsHoveringTrash] = useState(false)

    function handleStatusChange() {
        onChangeStatus(item)
        setCurrentSVG(!isChecked ? checkedLogo : uncheckedLogo)
    }

    return <div className={styles.item}> <img
        src={currentSVG}
        width={17}
        height={17}
        onClick={() => handleStatusChange()}
        onMouseEnter={() => setCurrentSVG(isChecked ? checkedHoverLogo : uncheckedHoverLogo)}
        onMouseLeave={() => setCurrentSVG(isChecked ? checkedLogo : uncheckedLogo)}
    />
        <p className={isChecked ? styles.crossedOutContent : ""}> {item.content}</p>
        <img src={isHoveringTrash ? trashHover : trash} onClick={() => onDeleteTodo(item)}
            onMouseEnter={() => setIsHoveringTrash(true)}
            onMouseLeave={() => setIsHoveringTrash(false)}
        />
    </div>
}