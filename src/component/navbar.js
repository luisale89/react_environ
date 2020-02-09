import React from 'react';
import { Modal } from './modal';

export const Navbar = () => {
    return (
        <div className="container">
            <h1>--appNavbar--</h1>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button>
            <Modal title='Hola Mundo'/>
        </div>
    );
}