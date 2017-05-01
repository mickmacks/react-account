import React, { Component } from 'react';

export default class Account extends Component {

  constructor(props) {
    super()
    this.state = {
      balance: 0.00
    }
  }

  addMoney(e) {

      this.setState({
        balance: this.state.balance + parseInt(this.refs.amount.value)
      });

      this.refs.amount.value = ''

  }

  takeMoney(e) {

      if (this.refs.amount.value > this.state.balance) {
        alert('You poor, sucker!');
        this.refs.amount.value = ''
        return;
      }

      this.setState({
        balance: this.state.balance - parseInt(this.refs.amount.value)
      });

      this.refs.amount.value = ''

  }

  render() {

    let balanceClass = 'balance';

    if (this.state.balance === 0) {

      balanceClass += ' zero';

    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}.00</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(e) => this.addMoney(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.takeMoney(e)} />
      </div>
    )
  }
}
