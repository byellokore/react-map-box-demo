import React, { Component } from 'react';
import styled, {injectGlobal} from 'styled-components';
import Logo from '../trilist-logo.png';
/*import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';*/

injectGlobal`
    body {
        background-color: #F1F1F1;
    }
`;


const Navbar = styled.div `
    background-color: #FFFFFF;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 5px;
    margin-bottom: 25px;
`;

const StyledLogo = styled.img`
    width: auto;
    height: 65px;
`;

const StyledHeader = styled.h4`
    color: #EEEEE;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
    margin-right: 10px;
`;
class Header extends Component {
    render(){
        const {count} = this.props;
        return(
        <Navbar>
            <StyledLogo src={Logo} />
            <StyledHeader>{count || ''} Traffics incidents</StyledHeader>
         </Navbar>
        );      
    }

}

export default Header;