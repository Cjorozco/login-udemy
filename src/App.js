import { Component } from "react";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmailChange ({target: { value }}){
    this.setState({email: value});
  }
  handlePasswordChange ({target: { value }}) {
    this.setState({password: value});
  }
  handleFormSubmit (event) {
    alert(`Usuario: ${this.state.email}, Password: ${this.state.password}`)
    event.preventDefault();
  };

  render () {
    return (
      <div className='App'>
        <form onSubmit={this.handleFormSubmit}>
          <h2>Login</h2>
          <label>
            Email
            <input type='email' value={this.state.email} onChange={this.handleEmailChange} />
          </label>
          <label>
            Password
            <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          </label>
          <button type='submit'>
            Enter
          </button>
        </form>
      </div>
    );
  }
}

export default App;
