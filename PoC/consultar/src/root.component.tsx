import React from "react";
import axios from "axios";
import "./root.component.css";

var state = {
  transactions: [],
};
class Root extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get(
        `https://ohtvdb3zu4.execute-api.us-east-1.amazonaws.com/poc/transaction`
      )
      .then((res) => {
        const transactions = res.data;
        state.transactions = transactions.Result.Items;
        this.setState({ transactions });
      });
    console.log(state.transactions);
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mount</th>
              <th>Channel</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {state.transactions.map((transaction, index) => {
              return (
                <tr>
                  <td>{transaction.TransactionId}</td>
                  <td>{transaction.Mount}</td>
                  <td>{transaction.Channel}</td>
                  <td>{transaction.RequestTime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Root;
