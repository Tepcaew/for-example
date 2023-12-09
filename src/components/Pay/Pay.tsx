import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";
import styles from "./Pay.module.css";
import Summ from "./Summ";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={styles.allPay}>
        <h1 className={styles.payHead}>Пополнение баланса</h1>
        <div id="PaymentForm" className={styles.payBody}>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            className="rccs__card--front"
          />
          <div className={styles.formsBlock}>
            <form className={styles.payForm}>
              <input
                className={styles.payInput}
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                className={styles.payInput}
                type="tel"
                name="name"
                placeholder="Your Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <div className={styles.ExpiryAndCvc}>
                <input
                  className={styles.payInputExpiry}
                  type="tel"
                  name="expiry"
                  placeholder="expiry"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <input
                  className={styles.payInputCvc}
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </form>
            <Summ />
          </div>
        </div>
      </div>
    );
  }
}
