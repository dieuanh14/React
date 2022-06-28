import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterComponent(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay <br />
              Clear Water, Lowloon <br />
              Hong Kong <br />
              <i><PhoneIcon/></i> : +1449474722 <br />
              <i><PhoneIcon/></i> : +1436374722 <br />
              <i><MailIcon/>
              <a href="mailto:confusion@gmail.com.net">confusion@gmail</a>
              </i>
            </address>
          </div>
          <div className="icon" >
            <div className="text-center">
              <a href="" className="btn btn-social-icon btn-facebook">
                <i ><FacebookIcon/></i>
              </a>
              <a href="" className="btn btn-social-icon btn-linkedin">
                <i><TwitterIcon/></i>
              </a>
              <a href="" className="btn btn-social-icon btn-twitter">
                <i ><InstagramIcon/></i>
              </a>
              <a href="" className="btn btn-social-icon ">
              <i ><GoogleIcon/></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
