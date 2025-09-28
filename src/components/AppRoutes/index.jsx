import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import TaskList from "@/pages/TaskList";
import EditTask from "@/pages/EditTask";
import NewTask from "@/pages/NewTask";
import NotFound from "@/pages/NotFound/NotFound";

function AppRoutes() {
    return (
        <>
            <HashRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<TaskList/>}/>
                    <Route path="/redux.html"/>
                    <Route path="/New-Task" element={<NewTask/>}/>
                    <Route path="/:id/edit" element={<EditTask/>} />
                    <Route path='/*' element={<NotFound/>}></Route>

                </Routes>
            </HashRouter>
        </>
    )
} 

export default AppRoutes;