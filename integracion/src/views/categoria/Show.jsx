import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';
import axios from 'axios';

class Show extends Component {
    state ={
        categorias: [],
    }
   
    componentDidMount(){
       this.llenar();
    }
    llenar(){
        axios.get('http://localhost:8080/restCategoria/findAll')
        .then((res)=>{
            this.setState({
                categorias: res.data
            })
        }).catch(e=>{
            alert("Error, verifique si el web service esta activo");
        });
    }
    eliminar(idCategoria){
        axios.delete('http://localhost:8080/restCategoria/'+idCategoria)
        .then((res)=>{
            this.llenar();
        }).catch((e)=>{
            console.log(e);
        })
    }
    render() {
        let datos=this.state.categorias.map((ver)=>{
            return(
                <tr key={ver.idCategoria}>
                <td>{ver.idCategoria}</td>
                <td>{ver.descripcionCategoria}</td>
                <td><Button color="danger" onClick={this.eliminar.bind(this,ver.idCategoria)} >Eliminar</Button></td>
              </tr>
            )
        })
        return (
            <Table className="table table-hover">
                <thead>
                    <tr>
                        <td>Codigo</td>
                        <td>Categoria</td>
                    </tr>
                </thead>
                <tbody>
                    {datos}
                </tbody>
            </Table>
        )
    }
}

export default Show;
