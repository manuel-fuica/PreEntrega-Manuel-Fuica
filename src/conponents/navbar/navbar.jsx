import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Cartwidget from '../cartWidget/cartwidget';
import logo from '/assets/img/logo-sushi.png';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className='mt-5 container'>
        <div className='row'>
            <div className='contenedor-navbar col-6 text-center justify-content-center'>
                <Link to='/'>
                    <img src={logo} alt="logo-sushi" />
                </Link>
            </div>
            <div className='col-6'>
                <div className='row '>
                    <ul className='d-flex list-unstyled'>
                        <NavLink to={'/categoria/SUSHIS'} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className=' me-3 text-white'>SUSHIS</li>
                        </NavLink>
                        <NavLink to={'/categoria/GOHANS'} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='nav-item me-3 text-white'>GOHANS</li>
                        </NavLink>
                        <NavLink to={'/categoria/SASHIMIS'} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='nav-item me-3 text-white'>SASHIMIS</li>
                        </NavLink>
                        <NavLink to={'/categoria/CEVICHES'} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='nav-item me-3 text-white'>CEVICHES</li>
                        </NavLink>
                        <NavLink to={'/categoria/APERITIVOS'} className={({ isActive }) => isActive ? 'active' : ''}>
                            <li className='nav-item me-3 text-white'>APERITIVOS</li>
                        </NavLink>
                        <Cartwidget />
                    </ul>
                </div>
            </div>
        </div>
        </header>
    )
    }
    
    export default Navbar
