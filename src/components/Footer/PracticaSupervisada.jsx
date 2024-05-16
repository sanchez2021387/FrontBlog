import React, { useState } from 'react'; // Importa useState desde React
import './dos.css';

export const PracticaSupervisada = () => {
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
          <h1 className='title-category-class'>PRACTICA SUPERVISADA</h1>
        </div>
        <div className='container'>
        <div className='title-1'>
            <p>Junior Sanchez</p>
        </div>
        <div className='project-name'>
            <p>Laboratorio PS # 1</p>
        </div>
        <div className='description-project'>
            <p>Agenda Web.</p>
        </div>
        <a href="https://github.com/sanchez2021387/Laboratorio-1.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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
            <p>Laboratorio PS #2</p>
        </div>
        <div className='description-project'>
            <p>Proyecto Control Académico.</p>
        </div>
        <a href="https://github.com/sanchez2021387/LaboratorioPS_2.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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
            <p>Laboratorio PS # 3</p>
        </div>
        <div className='description-project'>
            <p>Proyecto, Gestor de opiniones.</p>
        </div>
        <a href="https://github.com/sanchez2021387/Lab_PS_3.git"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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
            <p>Evaluación bimestral PS.</p>
        </div>
        <div className='description-project'>
            <p>El examen bimestral de práctica supervisada se pondera con el 50% del examen bimestral de Tecnología y el 50% del proyecto bimestral de Taller.</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=364240"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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
            <p>Proyecto grupal.</p>
        </div>
        <div className='description-project'>
            <p>Desarrollo de aplicación web “Almacenadora”.</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=425902"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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
            <p>Frameworks de aplicaciones híbridas</p>
        </div>
        <div className='description-project'>
            <p>Exposición Grupal:

Frameworks para desarrollo de aplicaciones híbridas:

 Xamarin
 NativeScript
 React Native
 Flutter
 Ionic
 Framework 7
 Apache Córdova</p>
        </div>
        <a href=""><button>INGRESAR AL PROYECTO U TAREA</button></a>
        {/* Aquí debe ir el textarea */}
    <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>
    </div>
  )
}

export default PracticaSupervisada
