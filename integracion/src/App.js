import React from 'react';
import './App.css';
import { Container, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import CreateCategoria from './views/categoria/CreateCategoria';
import Wellcome from './views/categoria/Wellcome';
import Show from './views/categoria/Show';
class App extends React.Component {
  render() {
    return (
      <Container className="container-fluid">
        
          <BrowserRouter>
            <div>
              <Navigation />
              <Switch>
                <Route path="/" component={Wellcome} exact />
                <Route path="/create" component={CreateCategoria} />
                <Route path="/show" component={Show} />
              </Switch>
            </div>
          </BrowserRouter>
       
      </Container>
    )
  }
}

export default App;
