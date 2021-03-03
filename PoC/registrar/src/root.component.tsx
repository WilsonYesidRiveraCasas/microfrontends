import React from "react";
import "./root.component.css";
import axios from 'axios';

const state = {
  mount: 0,
  channel: ''
};

export default function Root(props) {

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="mount">Monto</label>
        <input type="text" name="mount" onChange={this.handleChange} placeholder="Ingrese el monto, sin puntos, sin comas" />

        <label>Canal</label>
        <select name="channel" onChange={this.handleChange}>
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

function handleChange(event) {
  console.log("llego el evento");
  this.setState({ name: event.target.value });
};

  

function handleSubmit(event) {
  event.preventDefault();

  const transaction = {
    mount: this.state.mount,
    channel: this.state.channel
  };

  console.log("llegó la peticion")

  axios.post(`https://jsonplaceholder.typicode.com/users`, { transaction })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
};
