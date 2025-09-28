import { useState } from "react";

import style from './NewTask.module.scss'
import { data, useNavigate } from "react-router-dom";
import { useDispatch } from "@/libs/react-redux";

function NewTask() {
    const navigate = useNavigate()
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        if(!value) {
            alert("không được để trống")
            return; 
        };
        fetch(`http://localhost:3000/tasks`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: value,
            })
        }).then(res => res.json())
        .then(data => {
            dispatch({
                type: "ADD_TASK",
                payload: data,
            })
        })
        navigate("/")
    }
    const handleCancel = () => {
        navigate("/")
    }
    return (
        <div className={style.container}>
            <form action="">
                <input onChange={handleChange} type="text" placeholder="task mới"/>
                <button type="click" onClick={handleSubmit}>Save</button>
            </form>
            <button onClick={handleCancel}>cancel</button>
        </div>
    )
}

export default NewTask;