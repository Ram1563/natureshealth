import React, { Component } from 'react';
import PayableService from '../services/PayableService';

class PayablesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payables: [],
      newPayable: {
        payableDescr: '',
        rate: '',
        unit: '',
        amount: '',
        truck: '',
        ptDate: '',
        actions: '',
      },
    };
  }

  componentDidMount() {
    this.loadPayables();
  }

  loadPayables() {
    PayableService.getAll()
      .then((response) => {
        this.setState({ payables: response.data });
      })
      .catch((error) => {
        console.error('Error loading payables:', error);
      });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newPayable: {
        ...prevState.newPayable,
        [name]: value,
      },
    }));
  }

  addPayable() {
    PayableService.create(this.state.newPayable)
      .then((response) => {
        this.setState((prevState) => ({
          payables: [...prevState.payables, response.data],
          newPayable: {
            payableDescr: '',
            rate: '',
            unit: '',
            amount: '',
            truck: '',
            ptDate: '',
            actions: '',
          },
        }));
      })
      .catch((error) => {
        console.error('Error adding payable:', error);
      });
  }

  render() {
    return (
      <div>
        <h3>Payables Table</h3>
        <table>
          <thead>
            <tr>
              <th>Payable Description</th>
              <th>Rate</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Truck</th>
              <th>PT Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.payables.map((payable) => (
              <tr key={payable._id}>
                <td>{payable.payableDescr}</td>
                <td>{payable.rate}</td>
                <td>{payable.unit}</td>
                <td>{payable.amount}</td>
                <td>{payable.truck}</td>
                <td>{payable.ptDate}</td>
                <td>{payable.actions}</td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  name="payableDescr"
                  value={this.state.newPayable.payableDescr}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="rate"
                  value={this.state.newPayable.rate}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="unit"
                  value={this.state.newPayable.unit}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="amount"
                  value={this.state.newPayable.amount}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="truck"
                  value={this.state.newPayable.truck}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="date"
                  name="ptDate"
                  value={this.state.newPayable.ptDate}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="actions"
                  value={this.state.newPayable.actions}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </td>
              <td>
                <button onClick={() => this.addPayable()}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PayablesTable;
