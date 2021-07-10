import './App.css'
import React from 'react'

import ComParametro from './components/comParametro'
import ComFilhos from './components/comFilhos' 
import Card from './components/layout/card'
import Primeiro from './components/primeiro'
import Repeticao from './components/repeticao'
import Condicional from './components/condicional'
import CondicionalComIf from './components/condicionalComIf'

export default () =>
    <div className="App">
        <Card titulo="#01 - Primeiro componente">
            <Primeiro/>
        </Card>
        <Card titulo="#02 - Componente com parametro">
            <ComParametro 
                titulo="Esse eh o titulo"
                subtitulo="Esse eh o subtitulo" 
            />
        </Card>
        <Card titulo="#03 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repeticao">
            <Repeticao/>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={11}/>
        </Card>
        <Card titulo="#06 - Condicional com if">
            <CondicionalComIf numero={10}/>
        </Card>
    </div>
