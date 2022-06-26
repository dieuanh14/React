import React from "react";

export default function FooterComponent(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="contactus.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay <br/>
              Clear Water, Lowloon <br/>
              Hong Kong <br/>
              <i className="fa fa-phone fa-lg"></i> : +1449474722 <br/>
              <i className="fa fa-fax fa-lg"></i> : +1436209374722 <br/>
              <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:confusion@gmail.com.net">confusion@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a href="" className="btn btn-social-icon btn-google"><i className="fa fa-google-plus"></i></a>
              <a href="" className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
              <a href="" className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
              <a href="" className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
              <a href="" className="btn btn-social-icon "><i className="fa fa-envelope-o"></i></a>
              <a href="" className="btn btn-social-icon btn-google"><i className="fa fa-envelope-o"></i></a>
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
