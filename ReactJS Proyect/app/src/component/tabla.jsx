import React, { Component } from 'react';
import axios from 'axios';
import Table from 'reactstrap';
import datos from './CategoriaService'

export default class Datos extends Component {
    constructor(props){
        super(props)
        this.state={
            datos: [],
            msg:null
        }
        this.refreshCategorias = this.refreshCategorias.bind(this)
    }
    componentDidMount(){
        this.refreshCategorias();
    }
    refreshCategorias(){
        datos.retrieveAll()
        .then(
            response=>{
                console.log(response);
                this.setState({datos:response.data})
            }
        )
    }
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={datos.idCategoria}>
                                            <td>{datos.idCategoria}</td>
                                            <td>{datos.descripcionCategoria}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}