import React, {Component} from 'react';
import PropTypes from 'prop-types';

//redux
import {connect} from 'react-redux';
import {deleteCita} from '../actions/citasActions';

class Cita extends Component {

    deleteCita = () => {
        this.props.deleteCita(this.props.info.id);
    }

    render() { 
        const {fecha, hora, mascota, propietario, sintomas} = this.props.info; 
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre Dueño:</span> {propietario} </p>
                    <p className="card-text"><span>Fecha:</span> {fecha} </p>
                    <p className="card-text"><span>Hora:</span> {hora} </p>
                    <p className="card-text"><span>Sintomas:</span> <br />
                    {sintomas}</p>
                    <button 
                        onClick={this.deleteCita }
                        className="btn btn-danger">Borrar &times;
                    </button>
                </div>
            </div>
         )
    }
}

Cita.propTypes = {
    info :   PropTypes.shape({
        fecha : PropTypes.string,
        hora :  PropTypes.string,
        mascota : PropTypes.string,
        propietario : PropTypes.string,
        sintomas : PropTypes.string
    }),
}

 
export default connect(null, {deleteCita})(Cita);