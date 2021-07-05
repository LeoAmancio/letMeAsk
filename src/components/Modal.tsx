import React from 'react';

import '../styles/modal.scss';

export function Modal() {
    return (
        <div className="Modal">
<h1>TESTE</h1>
            <div className="container">
                <div className="content">
                    <h2>
                        Excluir Pergunta
                    </h2>
                    <p>
                        Tem certeza que você deseja excluir esta pergunta?
                    </p>
                    <button className="btn=cancel">Cancelar</button>
                    <button className="btn=delete">Sim,exlcuir</button>
                </div>
            </div>
        </div>

    )
}