import React, { Component } from "react";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from '@mui/icons-material/Person';
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  NavLink,
} from "reactstrap";

class HeaderComponennt extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/" className="mr-auto">
              <img src="assets/images/logo.png" height="30px" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link">
                  <i><HomeIcon/></i>  
                    <Link to="/home">
                      Home
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link">
                  <i><PersonIcon/></i>  
                    <Link to="/aboutus">
                      About us
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link">
                  <i><MenuIcon/></i>  
                    <Link  to="/menu">
                      Menu
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                  <i><ContactPageIcon/></i>  
                    <Link  to="/contactus">
                      Contact us
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>We take inspiration from the World's</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponennt;
