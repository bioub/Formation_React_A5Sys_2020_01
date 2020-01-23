import React, { Component } from "react";

export class ContactForm extends Component {
  state = {
    prenom: '',
    nom: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="ContactForm">
        <form onSubmit={this.handleSubmit}>
          <div>
            Prénom : <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
          </div>
          <div>
            Nom : <input name="nom" value={this.state.nom} onChange={this.handleChange} />
          </div>
          <div>
            <button>Envoyer</button>
          </div>
        </form>
      </div>
    );
  }
}