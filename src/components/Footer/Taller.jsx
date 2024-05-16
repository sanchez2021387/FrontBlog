import React, { useState } from 'react'; // Importa useState desde React
import './dos.css';

export const Taller = () => {
  // Estado para almacenar los comentarios
  const [comments, setComments] = useState(Array().fill(''));

  // Función para manejar cambios en los comentarios
  const handleCommentChange = (index, event) => {
    const newComments = [...comments];
    newComments[index] = event.target.value;
    setComments(newComments);
  };

  return (
    <div>
      <div>
        <h1 className='title-category-class'>Taller</h1>
      </div>
      <div className='container'>

        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Laboratorio 1</p>
        </div>
        <div className='description-project'>
            <p>Creacion de pagina web</p>
        </div>
        <a href="https://github.com/sanchez2021387/Laboratorio1.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
    {/* Aquí debe ir el textarea */}
    <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>
    <div className='container'>
        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Laboratorio 2</p>
        </div>
        <div className='description-project'>
            <p>En este laboratorio deberá completar el proyecto visto en clase denominado "Adopción de mascotas". El profesor indicará las funciones que deberá de realizar para completar el sistema. 
                Como mínimo deberán ser las siguientes funcionalidades:

                UPDATE
                UPDATE_PASSWORD
                DELETE
                ADD_APPOINTMENT</p>
        </div>
        <a href="https://github.com/sanchez2021387/Laboratorio_2.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
      {/* Aquí debe ir el textarea */}
      <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[1]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(1, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Revisión de avances en proyecto final de bimestre</p>
        </div>
        <div className='description-project'>
            <p>En el documento adjunto en este apartado encontrarás las instrucciones generales para el desarrollo del proyecto bimestral.</p>
        </div>
        <a href="https://github.com/sanchez2021387/ProyectoBimestral.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
    {/* Aquí debe ir el textarea */}
    <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[2]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(2, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Ejercicios sobre lógica de programación.</p>
        </div>
        <div className='description-project'>
            <p>Ejercicios de lógica haciendo uso del lenguaje JavaScript, en plataforma “HackerRank”</p>
        </div>
        <a href="https://www.hackerrank.com/dashboard"><button>INGRESAR AL PROYECTO U TAREA</button></a>
    {/* Aquí debe ir el textarea */}
    <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[3]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(3, event)} // Ajusta el índice según corresponda al proyecto
          />  
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Revisión de avances en proyecto final de bimestre</p>
        </div>
        <div className='description-project'>
            <p>Revisión de avances (30%) en proyecto bimestral “Gestor de Hoteles”.</p>
        </div>
        <a href="https://github.com/oskcarsv/hotel-management-back.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
      {/* Aquí debe ir el textarea */}
      <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[4]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(4, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>
    </div>
  )
}

export default Taller;
