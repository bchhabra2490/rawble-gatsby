import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap";

import './footer.scss';

const Footer = () => (
    <footer>
    <Row className="footer">
        <Col xs={12}>
            <Row>
                <Col xs={12} sm={4} className="footer-col">
                    <h5>Where to find us</h5>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> +91-9780443873</p>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> #2162-C, Sector 63, CHD</p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> madhav@rawble.in</p>
                </Col>
                <Col xs={12} sm={4} className="footer-col">
                    <h5>Important Links</h5>
                    <ul>
                        <li><Link to="/">Careers</Link></li>
                        <li><Link to="/">Terms and Policy</Link></li>
                        <li><Link to="/">About Us</Link></li>
                    </ul>
                </Col>
                <Col xs={12} sm={4} className="footer-col">
                    <h5>Follow Us</h5>
                    <a href="#facebook" style={{padding: "10px"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#instagram" style={{padding: "10px"}}style={{padding: "10px"}}><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#twitter" style={{padding: "10px"}}><i class="fa fa-twitter" aria-hidden="true"></i></a>
                </Col>
            </Row>
        </Col>
    </Row>
    © Rawble Inc {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by <a href="https://www.bharatchhabra.com" target="_blank">Bharat Chhabra</a>
    </footer>
)

export default Footer
