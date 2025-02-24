import React from "react";

// Definimos el tipo de las props que acepta el componente Card
type CardProps = {
  title: string;         // Título de la tarjeta
  content?: string;      // Contenido de la tarjeta (opcional)
  list?: string[];       // Lista de elementos (opcional)
  color: string;         // Color de fondo y texto de la tarjeta
};

const Card: React.FC<CardProps> = ({ title, content, list, color }) => {
  return (
    <div 
      // Asignamos clases dinámicamente basadas en las props
      className={`${color} bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg text-card-paragraph-light dark:text-card-paragraph-dark text-size-p`}
    >
      {/* Título de la tarjeta con clases dinámicas de colores */}
      <h2 className="text-xl font-bold text-card-h2-light dark:text-card-h2-dark">
        {title}
      </h2>

      {/* Si se pasa contenido, lo mostramos */}
      {content && <p>{content}</p>}

      {/* Si se pasa una lista, la renderizamos como una lista HTML */}
      {list && (
        <ul>
          {list.map((item, index) => (
            // Cada ítem en la lista se presenta como un <li>
            <li 
              key={index} 
              className="before:content-['-'] before:text-card-list-bullet-light dark:before:text-card-list-bullet-dark text-size-p"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
