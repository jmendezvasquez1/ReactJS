import React from 'react';
import { Row, Container, Col,Navbar,NavbarBrand } from 'reactstrap';
import Menu from './Components/Menu';
import './App.css';
import { isBlock } from '@babel/types';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Navbar color="light" ligth expand="md">
            <NavbarBrand href="/">
              GRUPO CONSISA
            </NavbarBrand>
          </Navbar>
        </Row>
        <Row>
          <Col xs="2">
            <Menu />
          </Col>
          <Col xs="10">
            <div id="contenido"></div>
          </Col>
        </Row>


      </div>
    )
  }
}

export default App;
