import React from 'react';


export default (props) =>{
    return(
        <React.Fragment>
            <h4>Passo: {props.passo}</h4>
            <input type="number" value={props.passo} onChange={e => props.onPassoChange(+e.target.value)} />
        </React.Fragment>
    )
}