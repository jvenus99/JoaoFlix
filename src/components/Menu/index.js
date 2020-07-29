import React from 'react'
import logo from '../../assets/imgs/logo.png'
import './Menu.css';
import Button from './Button';

//import ButtonLink from './components/ButttonLink';


const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/" >  
                <img className="Logo" src={logo} alt="JoaoFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/" >
                Novo Vídeo
            </Button>

           

        </nav>
    );
}
export default Menu; 