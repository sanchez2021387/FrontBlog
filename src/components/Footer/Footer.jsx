import React from 'react';
import "./footer.css"; // Importa tu archivo de estilos CSS

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>
            JUNIOR SANCHEZ <br />
            2021387 <br />
          </p>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/taller">Taller</a></li>
            <li><a href="/tegnologia">Tecnología</a></li> {/* Corregido de Tegnologia a Tecnología */}
            <li><a href="/practica">Práctica Supervisada</a></li> {/* Corregido de Practica a Práctica */}
            <li><a href="https://github.com/sanchez2021387">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
