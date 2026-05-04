import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/task";

type TaskContextType = {
    tasks: Task[];
    loading: boolean;
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (id: string) => void;
};

export const TaskContext = createContext({} as TaskContextType);

export function TaskProvider({children} : {children: React.ReactNode}){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    //Carrega Tasks - CRUD: GET
    useEffect(()=>{
        async function loadTasks() {
            const storedTasks = await AsyncStorage.getItem("@tasks");

            if(storedTasks){
                setTasks(JSON.parse(storedTasks));
            }

            setLoading(false);
        }
    }, []);

    //Salva/Persiste Tasks
    useEffect(() => {
        AsyncStorage.setItem("@tasks", JSON.stringify(tasks))
    }, [tasks]);

    //CRUD: SET
    const addTask = (task: Task) => {
        setTasks((prev) => [...prev, task]);
    };

    //CRUD: UPDATE
    const updateTask = (updatedTask: Task) => {
        setTasks((prev) => 
        prev.map((t) => (t.id === updatedTask.id ? updatedTask: t))
        );
    };

    //CRUD: DELETE
    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    return(
        <TaskContext.Provider value={{tasks, loading, addTask, updateTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    );
}
