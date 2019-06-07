import React, { Component } from 'react';
import { Jumbotron, Input, Button, Label, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

class CreateCategoria extends Component {

    constructor() {
        super();
        this.state = {
            descripcionCategoria: ''
        };
        this.setState = this.setState;
    }


    handledChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    registrar() {

        axios.post('http://localhost:8080/restCategoria', this.state)
            .then((e) => {
                this.setState({
                    descripcionCategoria: ''
                })               
            })
            .catch((e) => {
                alert("Error, verifique si el web service esta activo");
            })

    }
    render() {
        return (
            <Jumbotron className="col-4">
                <Form>

                    <h4 align="center">CRUD basico con react y spring-boot</h4>
                    <FormGroup>
                        <Label>Descripcion Categoria</Label>
                        <Input name="descripcionCategoria" onChange={this.handledChange} />
                        <br></br>
                        <Button onClick={this.registrar.bind(this)} color="primary">Registrar</Button>{' '}
                    </FormGroup>
                </Form>
            </Jumbotron>
        )
    }

}

export default CreateCategoria;


