import { Component } from 'react';
import PropTypes from 'prop-types';

class GifAleatorio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: props.inicial,
            styles: {
                color: 'black'
            },
            gif: ""
        };
    }

    aumentarValor() {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    lanzarAlerta() {
        alert("No toques ahí!!");
    }

    cambiarColor() {
        this.setState({
            styles: {
                color: 'pink'
            }
        });
    }

    apiCall(url, handler) {
        fetch(url).then( response => response.json()).then( data => handler(data)).catch( error => console.log(error));
    }

    componentDidMount() {
        this.traerGifNuevo()

    }

    traerGifNuevo()  {
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=QcuhJEVU8o3tu0Ctd8BRrA5n7TQbH2EO&tag=&rating=g", this.mostrarGif)        
    }

    mostrarGif = (data) => {
        this.setState(
            {
                gif: data.data.images.original.url
            }
        )
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    traer

    render() {

        let contenido;
        if (this.state.gif =="") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif}></img>
        }
        return (
            <div>
                {contenido}
                <button onClick={() => this.traerGifNuevo() }>Random Gif!</button>
            </div>
        );
    }
}

GifAleatorio.propTypes = {
    inicial: PropTypes.number.isRequired,
};

export default GifAleatorio;


