import React from "react";
import UserInfo from "./Userinfo";
import Card from "./Card";
import ThemeToggle from "./ThemeToggle";

const UserPersona: React.FC = () => {
  return (
    <div className="p-6 bg-body-bg-light dark:bg-body-bg-dark min-h-screen text-main-header-light dark:text-main-header-dark text-size-p">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between p-6">
        {/* Título y línea */}
        <div className="flex flex-col">
          {/* Título "User Persona" */}
          <h1 className="text-size-titulo font-bold text-primary-light dark:text-primary-dark mb-1">
            User Persona
          </h1>
          {/* Línea debajo del título */}
          <hr className="w-40 border-t-4 border-primary-light dark:border-primary-dark mb-4" />
        </div>

        {/* Botón de cambio de tema */}
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Contenedor de la cuadrícula para la información */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4 rounded-card">
        {/* Sección de información del usuario */}
        <div className="sm:col-span-2 lg:col-span-1">
          <UserInfo />
        </div>

        {/* Cuadrícula para las tarjetas de "Bio", "Personality", "Pain Points", "Goals" */}
        <div className="sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-ft-card">
          {/* Tarjeta de "Bio" */}
          <Card
            title="Bio"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
            color="bg-card-bg-light dark:bg-card-bg-dark text-card-paragraph-light dark:text-card-paragraph-dark"
          />
          {/* Tarjeta de "Personality" */}
          <Card
            title="Personality"
            list={["Hardworking", "Smart", "Expressive", "Thoughtful"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
          {/* Tarjeta de "Pain Points" */}
          <Card
            title="Pain Points"
            list={["Issue 1", "Issue 2", "Issue 3", "Issue 4"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
          {/* Tarjeta de "Goals" */}
          <Card
            title="Goals"
            list={["Goal 1", "Goal 2", "Goal 3", "Goal 4"]}
            color="bg-card-bg-light dark:bg-card-bg-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
