import PhoneIcon from "@mui/icons-material/Phone";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import MailIcon from "@mui/icons-material/Mail";
import { Breadcrumb, FormFeedback } from "reactstrap";
import { BreadcrumbItem, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormGroup, Label } from "reactstrap";
import { Col } from "reactstrap";
import { Input } from "reactstrap";
import { render } from "@testing-library/react";
import { Button } from "react-bootstrap";
import React, { Component } from "react";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched:{
        firstname:false,
        lastname:false,
        telnum:false,
        email:false,
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur=this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    console.log("Current state is : " + JSON.stringify(this.state));
    alert("Current state is : " + JSON.stringify(this.state));
    event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };
  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };
    if (
      (this.state.touched.firstname && firstname.lenght < 3) ||
      (this.state.touched.firstname && firstname.lenght > 10)
    )
      errors.firstname =
        "First Name should be >=3 characters or <=10 characters";
    if (
      (this.state.touched.lastname && lastname.lenght < 3) ||
      (this.state.touched.lastname && lastname.lenght > 10)
    )
      errors.lastname =
        "Last Name should be >=3 characters or <=10 characters";
    const reg = /^\d+$/;
    if (this.state.touched.telnum && !this.reg.test(telnum))
      errors.telnum = "Tel should contain numbers only";
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").lenght !== 1
    )
      errors.email = "Email should contain a @";
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );
    return (
      // <div className="container">
      // <div className="row">
      //   <Breadcrumb>
      //     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
      //     <BreadcrumbItem active>Contact us</BreadcrumbItem>
      //   </Breadcrumb>
      //   <div className="col-12">
      //     <h3>Contact us</h3>
      //     <hr/>
      //   </div>
      // </div>
      //   <div className="row row-content">
      //     <div className="col-12">
      //       <h3>Location Information</h3>
      //     </div>
      //     <div className="col-12 col-sm-4 offset-sm-1">
      //       <h5>Our Address</h5>
      //       <address>
      //         121, Clear Water Bay <br />
      //         Clear Water, Lowloon <br />
      //         Hong Kong <br />
      //         <i>
      //           <PhoneIcon />
      //         </i>{" "}
      //         : +1449474722 <br />
      //         <i>
      //           <PhoneIcon />
      //         </i>{" "}
      //         : +1436374722 <br />
      //         <i>
      //           <MailIcon />
      //           <a href="mailto:confusion@gmail.com.net">confusion@gmail</a>
      //         </i>
      //       </address>
      //     </div>
      //     <div className="col-12 col-sm-6 offset-sm-1">
      //       <h5>Map Our Location</h5>
      //     </div>
      //     <div className="col-12 col-sm-11 offset-sm-1">
      //       <div className="btn-group" role="group">
      //         <button class="btn btn-primary">
      //           <i>
      //             <PhoneIcon />
      //           </i>
      //           Call
      //         </button>
      //         <button className="btn btn-info">
      //           <i>
      //             <CloudIcon />
      //           </i>
      //           Skype
      //         </button>
      //         <button className="btn btn-success">
      //           <i>
      //             <MailIcon />
      //           </i>
      //           Mail
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="row row-content">
        <div className="container">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="FirstName"
                    value={this.state.firstname}
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onBlur={this.handleBlur("firstname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Contact Tel."
                    value={this.state.telnum}
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={this.handleBlur("telnum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactComponent;
