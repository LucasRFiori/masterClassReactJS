import React, { Component } from 'react';

import Display from './display';
import PassoForm from './passoForm';
import Buttons from './buttons';
export default class Contador extends Component{

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    } 

    inc = () =>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () =>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <Display valor={this.state.valor}></Display>
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>


                <div>
                    <Buttons onInc={this.inc} onDec={this.dec}></Buttons>
                </div>
            </div>
        )
    }
}