import React, {Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { getCitas } from '../actions/citasActions';


class ListaCitas extends Component {

    //refresca la pagina sin el didmount, no es necesario
     componentDidMount(){
         this.props.getCitas();
    }

    render() { 

        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';
    
        return ( 
                <div className="card mt-5">
                    <div className="card-body">
                        <h2 className="card-title text-center">{mensaje}</h2>
                        <div className="lista-citas">
                                {Object.keys(this.props.citas).map(cita => (
                                    <Cita
                                        key={cita}
                                        info={this.props.citas[cita] }
                                        idCita={cita}
                                        borrarCita={this.props.borrarCita}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
         )
    }
}

ListaCitas.propTypes  =  {
    citas : PropTypes.object.isRequired
}

const mapStateToProps = state => ({  
    //el nombre del primer 'citas' es por el reducers/index y el segundo 'citas' por reducers/citasReducer
    citas: state.citas.citas
});

export default connect(mapStateToProps, {getCitas}) (ListaCitas);