import React from "react"
import { Link } from "gatsby"
import { Row, Col } from 'react-bootstrap';

import './contact.scss';

const ValuesSection = () => (
  <div className="values">
      <Row>
          <Col xs={1}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i></p>
          </Col>
          <Col xs={11}>
            <p>We are on a mission to create extraordinary value for the global nutrition and food ingredient industry by leveraging the ingredientsonline.com™ e-commerce platform around the world to build an online global community of buyers and sellers.</p>
          </Col>
      </Row>
      <Row>
          <Col xs={1}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i></p>
          </Col>
          <Col xs={11}>
            <p>By using digital technology we are extending the art of conducting business on the tradeshow floor onto a highly efficient, cutting edge, transparent, neutral, e-commerce platform.</p>
          </Col>
      </Row>
      <Row>
          <Col xs={1}>
            <p><i class="fa fa-arrow-right" aria-hidden="true"></i></p>
          </Col>
          <Col xs={11}>
            <p>The platform provides infinite nutrition and food ingredient choices from qualified global sellers for global buyers. By hosting a highly efficient, completely transparent platform for all qualified buyers and sellers, we are delivering on our vision of making ingredientsonline.com “the global e-commerce solution”</p>
          </Col>
      </Row>
  </div>
)

export default ValuesSection
