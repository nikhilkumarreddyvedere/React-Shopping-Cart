import React, { Component } from "react";

import { Col, Row } from "react-bootstrap";

export class TaxesFees extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est.taxes and Fess</Col>
        <Col md={6}>{`$ ${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

export default TaxesFees;
