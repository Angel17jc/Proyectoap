import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToEstudiantes = () => {
    navigate('/estudiantes');
  };

  const goToFases = () => {
    navigate('/fases');
  };

  return (
    <div className="homepage">
      <h1>Bienvenido al Sistema Educativo</h1>
      <div className="buttons">
        <button onClick={goToEstudiantes} className="button">
          Gestionar Estudiantes
        </button>
        <button onClick={goToFases} className="button">
          Consultar
        </button>
      </div>
    </div>
  );
};

export default HomePage;
