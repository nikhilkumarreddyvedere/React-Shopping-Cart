import React, { Component } from "react";

import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class itemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => {
            this.setState({
              open: !this.state.open
            });
          }}
        >
          {this.state.open === false ? `see` : `hide`}
          {}
        </Button>
      </div>
    );
  }
}
