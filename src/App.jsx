import './App.css'
import React from 'react'

import ComParametro from './components/basicos/comParametro'
import ComFilhos from './components/basicos/comFilhos'
import Card from './components/layout/card'
import Primeiro from './components/basicos/primeiro'
import Repeticao from './components/basicos/repeticao'
import Condicional from './components/basicos/condicional'
import CondicionalComIf from './components/basicos/condicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/contador'
import MegaSena from './components/mega/mega'


export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro componente" color="#051e3e">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Componente com parametro" color="#251e3e">
                <ComParametro
                    titulo="Esse eh o titulo"
                    subtitulo="Esse eh o subtitulo"
                />
            </Card>
            <Card titulo="#03 - Componente com filhos" color="#451e3e">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repeticao" color="#651e3e">
                <Repeticao />
            </Card>
            <Card titulo="#05 - Condicional" color="#851e3e">
                <Condicional numero={11} />
            </Card>
            <Card titulo="#06 - Condicional com if" color="#051e3e">
                <CondicionalComIf numero={10} />
            </Card>
            <Card titulo="#07 - Comunicacao Direta" color="#251e3e">
                <Pai sobrenome="Rodrigues" />
            </Card>
            <Card titulo="#08 - Comunicacao Indireta" color="#451e3e">
                <Super />
            </Card>
            <Card titulo="#09 - Input" color="#651e3e">
                <Input />
            </Card>
            <Card titulo="#10 - Contador" color="#851e3e">
                <Contador/>
            </Card>
            <Card titulo="#10 - MegaSena" color="#051e3e">
                <MegaSena qtdeNumero={8}/>
            </Card>
        </div>
    </div>
