import React from 'react';

const RenderizandoComFuncoes = () => {
    const escolhaDeRenderizacao = (oQueRenderizar) => {
        if (oQueRenderizar === 'h1') {
            return <h1>Texto em h1</h1>;
        } else {
            return <h2>Texto em h2</h2>;
        }
    };

    return (
        <div>
            {escolhaDeRenderizacao('h1')}
            {escolhaDeRenderizacao('h2')}
        </div>
    );
};

export default RenderizandoComFuncoes;
