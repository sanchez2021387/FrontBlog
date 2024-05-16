import React, { useState } from 'react'; // Importa useState desde React
import './dos.css';
export const Tegnologia = () => {
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
        <h1 className='title-category-class'>Tegnologia</h1>
      </div>
      <div className='container'>

        <div className='title-1'>
        </div>            <p></p>

        <div className='project-name'>
            <p>Infografía</p>
        </div>
        <div className='description-project'>
            <p>Realiza una infografía sobre Desarrollo web y procesadores teniendo en cuenta los siguientes tópicos:


            HTML5
            CSS3
            FlexBox
            Bootstrap
            Preprocesadores
            LESS
            SASS
            PUG
            JADE</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=365053"><button>INGRESAR AL PROYECTO U TAREA</button></a>
     {/* Aquí debe ir el textarea */}
     <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>
    <div className='container'>
        <div className='title-1'>
            <p>JUNIOR SANCHEZ</p>
        </div>
        <div className='project-name'>
            <p>Mapa conceptual</p>
        </div>
        <div className='description-project'>
            <p>Realiza un mapa conceptual sobre tecnologías web teniendo en cuenta los siguientes tópicos:
            Javascript
            AJAX
            MVVM
            MVC
            DenoJS
            MeteorJS
            NextJS
            GraphQL
            BackboneJs</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=365432"><button>INGRESAR AL PROYECTO U TAREA</button></a>
     {/* Aquí debe ir el textarea */}
     <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>JUNIOR SANCHEZ</p>
        </div>
        <div className='project-name'>
            <p>Mapa Mental</p>
        </div>
        <div className='description-project'>
            <p>Realiza un mapa mental sobre el Desarrollo web teniendo en cuenta los siguiente tópicos:
        Hosting.
        Dominio.
        Cliente-Servidor.
        Web semántica.
        WebM.
        Canvas.
        W3C</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=365072"><button>INGRESAR AL PROYECTO U TAREA</button></a>
     {/* Aquí debe ir el textarea */}
     <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>JUNIOR SANCHEZ</p>
        </div>
        <div className='project-name'>
            <p>Investigación</p>
        </div>
        <div className='description-project'>
            <p>API, Rest, RestFull, buenas prácticas de desarrollo de API’s.</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=418060"><button>INGRESAR AL PROYECTO U TAREA</button></a>
     {/* Aquí debe ir el textarea */}
     <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>JUNIOR SANCHEZ</p>
        </div>
        <div className='project-name'>
            <p>Infografía: Beneficios React.</p>
        </div>
        <div className='description-project'>
            <p>Beneficios de la utilización de ReactJS.</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=418058"><button>INGRESAR AL PROYECTO U TAREA</button></a>
         {/* Aquí debe ir el textarea */}
         <textarea
            placeholder="Agrega tu comentario aquí"
            value={comments[0]} // Ajusta el índice según corresponda al proyecto
            onChange={(event) => handleCommentChange(0, event)} // Ajusta el índice según corresponda al proyecto
          />
    </div>

    <div className='container'>
        <div className='title-1'>
            <p>JUNIOR SANCHEZ</p>
        </div>
        <div className='project-name'>
            <p>Exposición de proyecto</p>
        </div>
        <div className='description-project'>
            <p>Basado en guía entregada en clase, desarrollar una propuesta de proyecto que solvente un problema social.</p>
        </div>
        <a href="https://kinal.academy/mod/assign/view.php?id=418062"><button>INGRESAR AL PROYECTO U TAREA</button></a>
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

export default Tegnologia
