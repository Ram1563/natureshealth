import React, { Component } from 'react';
import ReceivableService from '../services/ReceivableService';

class ReceivablesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivables: [],
      newReceivable: {
        rateName: '',
        invoiceDescr: '',
        rate: '',
        unit: '',
        amount: '',
        actions: '',
      },
    };
  }

  componentDidMount() {
    this.loadReceivables();
  }

  loadReceivables() {
    ReceivableService.getAll()
      .then((response) => {
        this.setState({ receivables: response.data });
      })
      .catch((error) => {
        console.error('Error loading receivables:', error);
      });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newReceivable: {
        ...prevState.newReceivable,
        [name]: value,
      },
    }));
  }

  addReceivable() {
    ReceivableService.create(this.state.newReceivable)
      .then((response) => {
        this.setState((prevState) => ({
          receivables: [...prevState.receivables, response.data],
          newReceivable: {
            rateName: '',
            invoiceDescr: '',
            rate: '',
            unit: '',
            amount: '',
            actions: '',
          },
        }));
      })
      .catch((error) => {
        console.error('Error adding receivable:', error);
      });
  }

  render() {
    return (
      <div>
        <h3>Receivables Table</h3>
        <table>
          <thead>
            <tr>
              <th>Rate Name</th>
              <th>Invoice Description</th>
              <th>Rate</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.receivables.map((receivable) => (
              <tr key={receivable._id}>
                <td>{receivable.rateName}</td>
                <td>{receivable.invoiceDescr}</td>
                <td>{receivable.rate}</td>
                <td>{receivable.unit}</td>
                <td>{receivable.amount}</td>
                <td>{receivable.actions}</td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  name="rateName"
                  value={this.state.newReceivable.rateName}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="invoiceDescr"
                  value={this.state.newReceivable.invoiceDescr}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="rate"
                  value={this.state.newReceivable.rate}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="unit"
                  value={this.state.newReceivable.unit}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="amount"
                  value={this.state.newReceivable.amount}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="actions"
                  value={this.state.newReceivable.actions}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <button onClick={() => this.addReceivable()}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReceivablesTable;
