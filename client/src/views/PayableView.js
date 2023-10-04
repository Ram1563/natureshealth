import React, { Component } from 'react';
import PayablesTable from '../components/PayablesTable';

class PayableView extends Component {
  render() {
    return (
      <div>
        <h1>Payables View</h1>
        <PayablesTable />
      </div>
    );
  }
}

export default PayableView;
