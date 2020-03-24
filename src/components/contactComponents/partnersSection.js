import React from "react"
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './contact.scss';

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "market.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return(
    <div className="partners">
        <Row>
            <Col xs={12}>
                <Row>
                    <Col>
                        <h3>Our Partners</h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="main">
            <Col xs={12} sm={4}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Col>
            <Col xs={12} sm={8}>
                <Row>
                    <Col xs={12}>
                        <h3>We Support</h3>
                        <p>We set aside 1% of sales to support nonprofit organizations working to ensure women build healthy, positive relationships with themselves. There shouldn’t be a stigma around talking about our bodies, the way they work, and how they’re treated, and we’re committed to bring more education and support to our community through partners we believe in deeply. </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="partner-list">
                        <h3>Sell with us like them.</h3>
                        <p>Hiya India</p>
                        <p>Hiya India</p>
                        <p>Hiya India</p>
                        <p>Hiya India</p>
                        <p>Hiya India</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="contactForm">
            <Col xs={12}>
                <Row>
                    <Col xs={4}>
                        <h1>We would love to hear from you.</h1>
                    </Col>
                    <Col xs={8}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Full Name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <Button variant="success" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    )
}
export default PartnersSection
