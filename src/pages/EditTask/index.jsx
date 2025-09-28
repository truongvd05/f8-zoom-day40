import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import style from './EditTask.module.scss'
import { useDispatch } from "@/libs/react-redux";
import TaskForm from "@/components/TaskForm";

function EditTask() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${id}`)
        .then(res => {
            if(!res.ok) {
                navigate("/")
                throw new Error("Task not found");
            }
            return res.json()
        })
        .then((data) => setTask(data))
        .catch(err => console.log(err));
    }, [id])
    const handleSubmit = (task) => {
        setLoading(true);
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        })
        .then(res => res.json())
        .then(data => {
            console.log(task);
            dispatch(
                {
                    type: "UPDATE_TASK",
                    payload: data,
                }
            )
            navigate("/")
        })
        .finally(() => setLoading(false))
        .catch(err => console.log(err)
        )
    }
    if(!task) return <p>Loading...</p>
    return (
        <div className={style.container}>
            <h2>Edit task {task.id}</h2>
            <TaskForm onSubmit={handleSubmit} initialData={task.title} submitText={"save"} isLoading={loading}/>
            <button onClick={() => navigate("/")}>cancel</button>
        </div>
    )
}

export default EditTask;