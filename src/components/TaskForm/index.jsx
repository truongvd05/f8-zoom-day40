import {  useEffect, useRef, useState } from "react";

function TaskForm({
    initialData = "",
    onSubmit,
    submitText,
    isLoading = false,
    ...props
}) {
    const [task, setTask] = useState({title: initialData});
    const inputRef = useRef();

    const handleSubmit = (e) => {
        if(!task.title.trim()) {
            alert("Không được để trống");
            return;
        };
        onSubmit(task);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setTask(prev => ({
            ...prev,
            title: value,
        }));
    }
    useEffect(() => {
        inputRef.current.focus();

    })
    return (
        <form action="" onSubmit={handleSubmit}>
            <input ref={inputRef} onChange={handleChange} type="text" defaultValue={task.title} disabled={isLoading}/>
            <button type="submit" disabled={isLoading}>{submitText}</button>
        </form>
    )
}

export default TaskForm;