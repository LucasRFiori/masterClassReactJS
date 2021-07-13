import React, {useState} from 'react';

import Sub from './Sub'

export default (props) =>{

    const [num, setNum] = useState(0)
    const [label, setLabel] = useState('Valor')

    function click(valorGerado, fim){
        console.log('acao!!!')
        console.log(valorGerado, fim)

        setNum(valorGerado)
        setLabel(fim)
    }
    return(
        <div>
            <h4>{label}: {num}</h4>
            <Sub sobrenome="Silva" click={click}>Pedro</Sub>
        </div>
    )
}