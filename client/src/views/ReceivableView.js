import React, { Component } from 'react';
import ReceivablesTable from '../components/ReceivablesTable';

class ReceivableView extends Component {
  render() {
    return (
      <div>
        <h1>Receivables View</h1>
        <ReceivablesTable />
      </div>
    );
  }
}

export default ReceivableView;
