import React from 'react';

function Subtracao({ num1, num2 }) {
    const resultado = num1 - num2;
    return <h1>O resultado de {num1} - {num2} é igual a {resultado}</h1>;
}

export default Subtracao;
