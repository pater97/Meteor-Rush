import './ranking.css'
import {Component} from 'react'

class Ranking extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="rank">
                <h2>
                    prova
                </h2>
                <table>
                    <caption>
                        <p>I miei dati</p>
                    </caption>
                    <thead>
                        <tr><th>Colonna 1</th><th>Colonna 2</th></tr>
                    </thead>
                    <tfoot>
                        <tr><td>Totale 1</td><td>Totale 2</td></tr>
                    </tfoot>
                    <tbody>
                        <tr><td>Dato 1,1</td><td>Dato 1,2</td></tr>
                        <tr><td>Dato 2,1</td><td>Dato 2,2</td></tr>
                        <tr><td>Dato 3,1</td><td>Dato 3,2</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ranking