import React, {Suspense, lazy} from 'react';
import {createRoot} from 'react-dom/client';
import ModalLoading from './modalLoading';


export function openModal(){
    //se esta realizando un lazy loading para que el contenido del modal se cargue al llamarlo y no al cargar la pagina.
    const Modal= lazy(()=>import('./modalSettings'));

    const modalDiv= document.createElement("div");

    modalDiv.id="modal";

    document.body.appendChild(modalDiv);

    const root= createRoot(modalDiv);
    
    root.render(
        //Suspense permite mostrar una reserva hasta que sus elementos hayan terminado de cargarse
        <Suspense fallback={<ModalLoading/>}> 
            <Modal root={root} title="Modal de Configuraciones"/> 
        </Suspense>     
    );
}


export function openModalAccount(){
    //se esta realizando un lazy loading para que el contenido del modal se cargue al llamarlo y no al cargar la pagina.
    const Modal= lazy(()=>import('./modalAccount'));

    const modalDiv= document.createElement("div");

    modalDiv.id="modal";

    document.body.appendChild(modalDiv);

    const root= createRoot(modalDiv);
    
    root.render(
        //Suspense permite mostrar una reserva hasta que sus elementos hayan terminado de cargarse
        <Suspense fallback={<ModalLoading/>}> 
            <Modal root={root} title="Modal de Cuenta"/> 
        </Suspense>     
    );
}