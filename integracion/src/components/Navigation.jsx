import React from 'react';
import { Nav, NavItem,NavbarBrand, UncontrolledDropdown,DropdownItem,DropdownToggle,DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem>
                <NavLink to="/">Home</NavLink>
                    
                </NavItem>
                <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Categorias</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink to="/create">Nueva Categoria</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink to="/show">Ver Categoria</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
            </Nav>
        )
    }
}

export default Navigation;