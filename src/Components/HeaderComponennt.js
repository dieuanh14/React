import React, { Component } from "react";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Form, Label, Input } from "reactstrap";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
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
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin(event){
    this.toggle();
    alert("Username: " +this.username.value + "Password: "+this.password.value + "Remember: "+this.remember.checked);
    event.preventDefault();
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
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
              <Nav navbar className="ml-auto">
                
                <NavItem>
                  <NavLink className="nav-link">
                    <i>
                      <HomeIcon />
                    </i>
                    <Link to="/home">Home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link">
                    <i>
                      <PersonIcon />
                    </i>
                    <Link to="/aboutus">About us</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link">
                    <i>
                      <MenuIcon />
                    </i>
                    <Link to="/menu">Menu</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i>
                      <ContactPageIcon />
                    </i>
                    <Link to="/contactus">Contact us</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span>Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Usermame</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                  type="checkbox"
                  name="remember"
                  innerRef={(input) => (this.remember = input)}
                /> Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit " className="button">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
        <div className="container" >
          <div className="row row-header" style={{Minwidth:'100%'}}>
            <div className="col-12">
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
