import React, { Component } from 'react';
import { Table, Container, Row, Input, Button } from 'reactstrap';
import axios from 'axios';

class app extends Component {
  state = {
    categorias: [],
    newCategoria: {
      param: ''
    }
  }
  componentDidMount() {

    axios.get('http://localhost:8080/restCategoria/findAll')

      .then((response) => {

        this.setState({
          categorias: response.data
        })
      })
      .catch(e => {
        alert(e);
      })
      ;

  }

  addCategoria() {
    alert(this.state.newCategoria.para);
    // axios.post('http://localhost:8080/restCategoria', this.state.newCategoria).then((response) => {
    //
    //})
  }
  render() {
    let cat = this.state.categorias.map((categoria) => {
      return (
        <tr key={categoria.idCategoria}>
          <td>{categoria.idCategoria}</td>
          <td>{categoria.descripcionCategoria}</td>

        </tr>
      )
    })
    return (

      <div className="App container">
        <br></br>
        <br></br>
        <Row>
          <Container className="col-3">
            <Input id="descripcion" value={this.state.newCategoria.param} onChange={(e) => {
              let { newCategoria } = this.state;
              newCategoria.descripcion = e.target.value;
              this.setState({ newCategoria });
            }} />
            <br></br>
            <Button onClick={this.addCategoria.bind(this)} color="success">Add</Button>{''}
          </Container>
        </Row>
        <Table className="table table-hover">
          <thead>
            <tr>
              <td>Id Categoria</td>
              <td>Descripcion Categoria</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            {cat}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default app;
