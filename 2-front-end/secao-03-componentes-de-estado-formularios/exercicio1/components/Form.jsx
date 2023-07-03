import React, { Component } from 'react';
import './Form.css';
import Input from './Input';
import TextArea from './TextArea';

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      estado: '',
      name: '',
      age: 0,
      moreInfo: '',
      presence: false,
      formularioComErros: true
    }
  }

  handleChange ({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    // Após alterar o estado, chama a função que verificará os erros.
    this.setState({
      [name]: value,
    }, this.handleError);
  }

  handleError() {
    const { estado, name, age, moreInfo, presence } = this.state;
    // Verifica se algum campo não está preenchido, se não estiver, traz true.
    const errorCases = [
      !estado.length, //!0 = true
      !name.length, 
      !age, 
      !moreInfo.length,
      !presence,
    ]
    // verifica se todos os elementos são false. Se sim, o formulario está preenchido e trás true.
    const formularioPreenchido = errorCases.every((elem) => elem === false);

    this.setState({
      formularioComErros: !formularioPreenchido
    })
  }


  render() {
    return (
      <>
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
            <Input 
              label='Nome:'
              name='name'
              type='text'
              value={this.state.name}
              func={this.handleChange}
            />
            <Input
              label='Idade:'
              type='number'
              name='age'
              value={this.state.age}
              func={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <legend>Mais informações</legend>
              <TextArea 
              label='Fale mais sobre você:'
              name='moreInfo'
              value={this.state.moreInfo}
              func={this.handleChange}
              />
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
        {
          this.state.formularioComErros ? <span style={ { color: 'red' } }> Preencha todos os campos! </span> : <span style={ { color: 'green' } }> Todos os campos preenchidos</span>
        }
      </>
    )
  }
}

export default Form;
