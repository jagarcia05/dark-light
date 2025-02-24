# Proyecto User Persona

Este proyecto tiene como objetivo crear una interfaz de usuario que representa una "User Persona". Utiliza **React** para la construcción de componentes y **Tailwind CSS** para el estilo, con soporte para **tema claro** y **oscuro**. El diseño muestra una variedad de tarjetas de información que presentan datos sobre una persona, como su biografía, personalidad, puntos de dolor y metas.

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── Card.tsx         # Componente de tarjeta que muestra información
│   ├── ThemeToggle.tsx  # Componente para alternar entre temas claro y oscuro
│   ├── UserInfo.tsx     # Componente con información personal del usuario
│   └── UserPersona.tsx  # Componente principal que integra todos los demás
└── App.tsx              # Componente raíz de la aplicación
```


## Card.tsx:

Este componente muestra una tarjeta que puede contener un título, un contenido en forma de texto o una lista.  
Utiliza clases de Tailwind CSS para la estructura y los colores, y cambia de acuerdo al tema (claro u oscuro).

**Props:**
- `title`: Título de la tarjeta (string).
- `content`: Texto de contenido opcional (string).
- `list`: Lista de ítems opcionales (array de strings).
- `color`: Clases CSS para personalizar el fondo y los colores de la tarjeta.

## ThemeToggle.tsx:

Este componente permite alternar entre el tema claro y oscuro.  
Se utiliza el ícono de un sol (`Sun`) y una luna (`Moon`) de Lucide para representar visualmente los temas.

**Estado:**
- `isDark`: Un booleano que indica si el tema actual es oscuro o no.  
Cuando el usuario hace clic, el tema cambia dinámicamente utilizando las clases `dark` de Tailwind CSS.

## UserInfo.tsx:

Este componente muestra la información del usuario, como nombre, edad, educación, ubicación, trabajo y hobbies.  
Utiliza clases de Tailwind CSS para la responsividad y estilos, permitiendo que el diseño se ajuste bien en pantallas pequeñas y grandes.  
La imagen del usuario está centrada y es **responsiva**.

## UserPersona.tsx:

Componente principal que organiza la interfaz de usuario, mostrando el título, el conmutador de tema y las tarjetas que contienen la información del usuario.  
Utiliza una rejilla responsiva con clases de Tailwind CSS para organizar los componentes de manera eficiente en diferentes tamaños de pantalla.

---

# Link


   (git)[https://github.com/tu-usuario/user-persona.git]
   (vercel)[]
