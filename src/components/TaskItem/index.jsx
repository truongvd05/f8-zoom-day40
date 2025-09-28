import style from './TaskItem.module.scss'
import { NavLink } from 'react-router-dom';
function TaskItem({task, onEdit, onDelete, isDeleting}) {
    return (
            <div key={task.id} className={style.item}>
                <li className={style.task} >{task.title}</li>
                <div className={style.wrap}>
                    <button>
                        <NavLink to={`/${task.id}/edit`}>edit</NavLink>
                    </button>
                    <button onClick={() => onDelete(task.id)}>delete</button>
                </div>
            </div>
    )
}

export default TaskItem;