import PropTypes from 'prop-types';

function Datos(props) {
    return (
        <tr>
            <td>{props.imagen}</td>
            <td>{props.ubicacion}</td>
            <td>{props.vivienda}</td>
            <td>{props.ambientes}</td>
            <td>{props.materialTecho}</td>
            <td>{props.materialPiso}</td>
            <td>{props.cielorraso}</td>
            <td>{props.banio}</td>
            <td>{props.electricidad}</td>
        </tr>
    )
}

Datos.propTypes = {
    imagen: PropTypes.imagen,
    ubicacion: PropTypes.string,
    vivienda: PropTypes.string,
    ambientes: PropTypes.string,
    materialTecho: PropTypes.string,
    materialPiso: PropTypes.imagen,
    cielorraso: PropTypes.string,
    banio: PropTypes.string,
    electricidad: PropTypes.string
}

export default Datos;