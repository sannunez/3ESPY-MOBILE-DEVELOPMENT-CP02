import { ThemeProvider } from "./src/context/ThemeContext";
import { AuthProvider } from "./src/context/AuthContext";
import { TaskProvider } from "./src/context/TaskContext";
import AppRoutes from "./src/routes/AppRoutes";

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
