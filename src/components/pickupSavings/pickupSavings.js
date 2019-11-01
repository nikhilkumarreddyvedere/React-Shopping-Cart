import React, { Component } from "react";

import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red"
  }
};

export class pickupSavings extends Component {
  render() {
    const tooltips = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps cut costs, we pass the saving
          on to you
        </p>
      </Tooltip>
    );
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltips}>
            <div style={styles.pickupSavings}>pickupSavings</div>
          </OverlayTrigger>
        </Col>

        <Col style={styles.totalSavings} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}

export default pickupSavings;
