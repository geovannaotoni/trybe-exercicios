import React, { Component } from 'react';
import './Form.css';

class SimpleForm extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estado: '',
      name: '',
      age: 0,
      moreInfo: '',
      presence: false,
    }
  }

  handleChange ({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // handleSelectValue = (event) => {
  //   this.setState({
  //     estado: event.target.value,
  //   })
  // }

  // handleInputNameValue(event) {
  //   this.setState({
  //     nome: event.target.value,
  //   })
  // }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Principais Dados</legend>
          <label>
            Estado:
            <select
              onChange={this.handleChange}
              name='estado'
            >
              <option value="">Selecione</option>
              <option value={'MG'}>MG</option>
              <option value={'RJ'}>RJ</option>
              <option value={'SP'}>SP</option>
            </select>
          </label>
          <label>
            Nome:
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Idade:
            <input
              type='number'
              name='age'
              onChange={this.handleChange}
              value={this.state.age}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Mais informações</legend>
          <label>
            Fale mais sobre você:
            <textarea
              name='moreInfo'
              onChange={this.handleChange}
              value={this.state.moreInfo}
            />
          </label>
          <label>Estará presente?
            <input
              type="checkbox"
              name="presence"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Upload de Foto:
            <input type='file' />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default SimpleForm;
