import React from "react";
import Datos from './Datos';
import { Component } from "react";



class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosList: []
        };
    }

    componentDidMount() {
        fetch('https://five.epicollect.net/api/export/project/relevamiento-la-escondida')
        .then(res => res.json())
        .then(datos => {
            this.setState({datosList: datos.data.project.forms[0].inputs})
        })
        .catch(err => {
            console.log(err)
        });
    }
    
    render() {
        return(
            <React.Fragment>
                        {/*<!-- React Fragment es una etiqueta fantasma que en el navegador no aparece y se usa para encerrar 
                            dos <div> hermanos, se puede usar también <> </> -->*/}
                <h1 className='h3 mb-2 text-gray-800'>Información de la base de datos</h1>
    
                <div className='card shadow mb-4'>
                    <div className='card-body'>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Ubicación</th>
                                        <th>Tipo de Vivienda</th>
                                        <th>Cantidad de Ambientes</th>
                                        <th>Material del Techo</th>
                                        <th>Material del Piso</th>
                                        <th>Tiene Cielorraso</th>
                                        <th>Componentes del Baño</th>
                                        <th>Conexión eléctrica</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.datosList.map((dato, index) => {
                                            return <Datos {...dato} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    
            </React.Fragment>
        )
    }
}

export default Tabla;