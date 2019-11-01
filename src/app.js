import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import PickupSavings from "../src/components/pickupSavings/pickupSavings";
import Subtotal from "../src/components/Subtotal/Subtotal";
import TaxesFees from "../src/components/TaxesFees/TaxesFees";
import EstimatedTotal from "../src/components/EstimatedTotal/EstimatedTotal";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 124
    };
  }

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total} />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes} />
          <hr />
          <EstimatedTotal EstimatedTotal={this.state.EstimatedTotal} />
        </Grid>
      </div>
    );
  }
}

export default App;
