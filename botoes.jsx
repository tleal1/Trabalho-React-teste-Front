import React, {Component} from 'react';
import '../componentes/botoes.css'

class BotoesTeste extends Component {
    render() {
        return(
            <button onClick={()=>{this.props.handleclick(this.props.label);}}>
                {this.props.label}
            </button>
        );
    }
}

class Mylabel extends Component {
    render() {
        return <span>Clique no:  {this.props.text}</span>
    }
}

class Botoes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            labelText : '',
        }
    }

    setLabelText = (labelText) =>{
        this.setState({ labelText});
    }

    render() {
        return(
        <div className = "Botoes">
            <Mylabel text = {this.state.labelText}/>
            <br></br>
            <BotoesTeste handleclick = {this.setLabelText} label = "Bom dia"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Boa Tarde"/>
            <BotoesTeste handleclick = {this.setLabelText} label = "Boa Noite"/>
        </div>
        )
    }
}

export default Botoes;