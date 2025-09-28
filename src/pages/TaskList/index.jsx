import { useDispatch, useSelector } from "@/libs/react-redux";
import { useEffect, useState } from "react";

import style from './TaskList.module.scss'
import { NavLink } from "react-router-dom";
import TaskItem from "@/components/TaskItem";

function TaskList() {
    const { tasks, loading, error } = useSelector( state => state);
    const [isDeleting, setIsDeleting] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("TaskList");
        fetch("http://localhost:3000/tasks")
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: "SET_TASKS",
                payload: data,
            })
        })
    }, [])
    const handleDelete = (id) => {
        const isConfirm = confirm("Bạn có muốn xóa task này?")
        if(!isConfirm) return;
        setIsDeleting(true);
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE",
        }).then(() => {
            dispatch({
            type: "DELETE_TASK",
            payload: id,
        })
        }).finally(() => {
            setIsDeleting(false)
        })
    }
    return (
        loading ? <p>loading...</p> : (<div className={style.content}>
            <h1>Tasklist</h1>
            <ul className={style.container}>
                {tasks.map((item) => {
                    return (
                        <TaskItem key={item.id} task={item} onEdit onDelete={handleDelete} isDeleting={isDeleting}/>
                    )
                })}
            </ul>
            <button><NavLink to={`/new-task`}>Create New Task</NavLink></button>
        </div>)
    )
}

export default TaskList;