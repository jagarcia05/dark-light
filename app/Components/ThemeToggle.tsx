import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  // Estado para manejar si el tema es oscuro o claro
  const [isDark, setIsDark] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    // Verificamos que el código se ejecute solo en el cliente (navegador)
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      // Alternamos la clase 'dark' en el elemento <html>
      document.documentElement.classList.toggle("dark");
      // Actualizamos el estado basado en la clase actual
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  };

  return (
    <button
      // Al hacer clic, se ejecuta la función para alternar el tema
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--color-button-bg-light)] dark:bg-[var(--color-button-bg-dark)] text-[var(--color-button-text-light)] dark:text-[var(--color-button-text-dark)] transition cursor-pointer hover:bg-opacity-80"
    >
      {/* Mostramos el ícono de sol o luna según el estado del tema */}
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      {/* El texto cambia entre 'Light' y 'Dark' dependiendo del estado */}
      <span className="text-sm font-medium">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeToggle;
