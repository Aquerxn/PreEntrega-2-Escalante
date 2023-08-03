import React from 'react';
import CartWidget from './CartWidget'; 

const NavBar = () => {
const categorias = ['Platos principales', 'Postres', 'Bebidas', 'Adicionales'];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">
            ZenPalate
            </a>

            <ul className="navbar-nav ml-auto">
            {categorias.map((categoria, index) => (
                <li className="nav-item" key={index}>
                <a className="nav-link" href={`/${categoria.toLowerCase()}`}>
                    {categoria}
                </a>
                </li>
            ))}
            <li className="nav-item">
                <CartWidget /> 
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;
