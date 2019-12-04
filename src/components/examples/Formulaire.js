import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Example 4
class Formulaire extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          firstname: '',
          lastname: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      firstname: event.target.value,
      lastname: event.target.value
    });
}

  handleSubmit(event) {
    alert('Welcome ' + this.state.firstname + ' ' + this.state.lastname);
    event.preventDefault();
}
  render() {
      return (
        <div>
            <h1>Le formulaire !</h1>
            <p>Comprendre comment récupérer et traiter des données au formulaire</p>
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>
                    <h2>Votre prenom : </h2>
                    <Form.Control type="text" value={this.state.firstname} onChange={this.handleChange}/>
                </Form.Label><br />
                <Form.Label>
                    <h2>Votre nom : </h2>
                    <Form.Control type="text" value={this.state.lastname} onChange={this.handleChange}/>
                </Form.Label><br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
      )
    }
}
  
  export default Formulaire;