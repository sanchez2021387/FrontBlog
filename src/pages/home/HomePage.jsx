import { useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Content } from "../../components/dashboardPage/Content";
import { usePublication } from "../../shared/usePublication";
import { LoadSpinner } from "../../components/LoadSpinner";
import { useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import "../../pages/homepage.css";

export const HomePage = () => {
  const { getPosts, allPosts, isFetching } = usePublication();
  const location = useLocation();

  useEffect(() => {
    getPosts();
  }, []);

  if (isFetching) {
    return <LoadSpinner />;
  }

  const showBanner = location.pathname === "/";

  return (
    <>
      <Navbar />
      {showBanner && (
        <header className="banner-container">
          <div className="content-container">
            <h1>M BLOG</h1>
            <p className="contenido">
              H0LA PODRIAS VER M BLOG?              
              <br /><br />
              <strong>¿Cómo Funciona?</strong><br />
              <strong>TALLER:</strong><br />
              HAY PODRAS VER TODAS LAS TAREAS HECHAS EN EL COLEGIO DE LA MATERIA DE TALLER
                <br /><br />
              <strong>TECNOLOGIA:</strong><br />
              HAY PODRAS VER TODAS LAS TAREAS HECHAS EN EL COLEGIO DE LA MATERIA DE TECNOLOGIA
                <br /><br />
              <strong>PRACTICA SUPERVISADA:</strong><br />
              HAY PODRAS VER TODAS LAS TAREAS HECHAS EN EL COLEGIO DE LA MATERIA DE PRACTICA SUPERVISADA
              <br /><br />
              <strong>Extras:</strong><br />
            PODRAS COMENTAR EN CADA TAREA PODES DECIR LO QUE DESEAS, TAMBIEN PUEDES INGRESAR A LOS PROYECTOS AL IGAUL QUE LAS TAREAS.
            </p>
          </div>
        </header>
      )}
      <main>
        <Content posts={allPosts} getPosts={getPosts} />
      </main>
      <Footer />
    </>
  );
};
