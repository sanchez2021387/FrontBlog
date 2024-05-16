import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-custom-color"> {/* Cambiar aquí */}
                <div className="blog">
                    <Link className="blog-nombre">Blog</Link>
                </div>
                <div className="contenedor-opciones">
                    <ul className="opciones">
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}