import React from 'react';
import { Nav, NavItem, NavLink, UncontrolledCollapse, Button } from 'reactstrap';

class Menu extends React.Component {

    render() {
        return (
            <div>
                <Nav vertical>
                    <NavItem>
                        <a id="opcion1">Opcion 1</a>
                    </NavItem>
                    <UncontrolledCollapse toggler="#opcion1">
                        <NavItem>
                            <NavLink href="/">Contenido 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contenido 2</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contenido 3</NavLink>
                        </NavItem>
                    </UncontrolledCollapse>
                   
                    <NavItem>
                        <a id="opcion2">Opcion 2</a>
                    </NavItem>
                    <UncontrolledCollapse toggler="#opcion2">
                        <NavItem>
                            <NavLink href="./Components/Contenido1">Opcion1.1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Opcion1.1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Opcion1.1</NavLink>
                        </NavItem>
                    </UncontrolledCollapse>

                </Nav>
            </div>

        )
    }
}

export default Menu
