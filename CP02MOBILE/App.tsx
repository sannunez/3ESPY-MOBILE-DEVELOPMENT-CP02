
import AppRoutes from "./src/routes/AppRoutes";
import { ThemeProvider } from "./src/theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes/>
    </ThemeProvider>
  );
}
