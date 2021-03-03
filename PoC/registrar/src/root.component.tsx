import React from "react";
import "./root.component.css";
import axios from "axios";

var state = {
  Mount: 0,
  Channel: "bancamovil",
};

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type === "number") state.Mount = value;
    else state.Channel = value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios
      .post(
        `https://ohtvdb3zu4.execute-api.us-east-1.amazonaws.com/poc/transaction`,
        state
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("registro exitoso!!!");
        state = {
          Mount: 0,
          Channel: "bancamovil",
        };
        this.setState(state);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Mount">Monto</label>
          <input
            type="number"
            name="Mount"
            value={state.Mount}
            onChange={this.handleChange}
            placeholder="Ingrese el monto, sin puntos, sin comas"
          />

          <label>Canal</label>
          <select
            name="Channel"
            value={state.Channel}
            onChange={this.handleChange}
          >
            <option value="bancamovil">Banca Movil</option>
            <option value="servilinea">Servilinea</option>
            <option value="cajero">Cajero</option>
            <option value="datafono">Datafono</option>
          </select>

          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
}

export default Root;
