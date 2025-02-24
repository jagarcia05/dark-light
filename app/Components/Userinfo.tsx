import React from "react";

const UserInfo: React.FC = () => {
  return (
    <div className="bg-card-bg-userinfo dark:bg-card-bg-dark p-4 rounded-lg lg:text-left md:text-center sm:text-center text-center text-size-p">
      {/* Imagen del usuario */}
      <img
        src="../img/imagen.jpeg"
        alt="User"
        className="w-full md:w-100 sm:w-100 lg:w-100 h-100 mx-auto rounded-ft-card"
      />
      
      {/* Información del usuario */}
      <h2 className="pt-5 text-card-h2-light dark:text-card-h2-dark">
        <strong>Name:</strong> 35
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Age:</strong> Married, 2 Kids
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Education:</strong> University of Calgary
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Location:</strong> Calgary, Alberta
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Job:</strong> Family Physician
      </h2>
      <h2 className="pt-10 text-card-h2-light dark:text-card-h2-dark">
        <strong>Hobbies:</strong> Hiking and dancing
      </h2>
    </div>
  );
};

export default UserInfo;
