import React, { Component } from 'react';
import './Footer.css';
import { 
  Row,
  Col,
  Button
 } from 'reactstrap';


class Footer extends Component {
  render() {
    return (
     
    <div className="footer_body">
      <Row>
        <Col xs="6" sm="6">
          <h1 className="footer_heading">Ready to get started?</h1>
          <h1>Get in touch or read the docs</h1>
        </Col>
        <Col xs="6" sm="6">
        <p className="lead">
          <Button color="primary footer_content_btn" size="lg">Login</Button>
          <Button color="primary footer_content_btn" size="lg">Register</Button>
        </p>
        </Col>
      </Row>
    <br/><br/>
      <hr/>
      <Row className="footer_gallery">
        <Col xs="4" sm="4">
        {/* <h3>thin<b>block</b></h3> */}
        </Col>
        <Col xs="8" sm="8" className="footer_gallery_content">
        <Col xs="4" sm="4">
        <span>Developers</span><br/><br/>
        <a href="https://github.com/Lambda-School-Labs/geoseek-fe/blob/master/README.md" target="_blank"><p>Documentation</p></a>
        <a href="https://github.com/Lambda-School-Labs/geoseek-fe" target="_blank"><p>Github</p></a>
        <a href="https://github.com/Lambda-School-Labs/geoseek-be/blob/master/README.md" target="_blank"><p>API Doc</p></a>
        </Col>
        {/* <Col xs="4" sm="4">
        <span>RESOURCES</span><br/><br/>
        <p>Terms & Conditons</p>
        <p>Privacy Policy</p>
        </Col> */}
        <Col xs="4" sm="4">
        <span>Connect with us</span><br/><br/>
        <p>FaceBook</p>
        <p>Instagram</p>
        <a href="https://twitter.com/i/flow/signup" target="_blank"><p>Twitter</p></a>
        </Col>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Footer;