import React, { Component } from 'react';
import { PlusCircleFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class NewCountry extends Component {
  state = {
    showModal: false,
    newCountryName: "",
    showToast: false,
  }
  handleModalClose = () => this.setState({ showModal: false });
  handleModalKeyPress = (e) => (e.keyCode ? e.keyCode : e.which) === 13 && this.handleAdd();
  handleAdd = () => {
    const { newCountryName } = this.state;
    if (newCountryName.length > 0) {
      this.props.onAdd(newCountryName);
      this.handleModalClose();
    } else {
      this.props.onShowToast("Please enter a country name");
    }
  }

  render() { 
    return (
      <React.Fragment>
        <Button variant="outline-success" onClick={ () => this.setState({ showModal: true, newCountryName: "" })}>
          <PlusCircleFill />
        </Button>
        <Modal onKeyPress={ this.handleModalKeyPress } show={ this.state.showModal } onHide={ this.handleModalClose }>
          <Modal.Header closeButton>
            <Modal.Title>New Country</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="modalForm1">
              <Form.Label>Country Name</Form.Label>
              <Form.Control
                type="text"
                name="newCountryName"
                onChange={ (e) => this.setState({ [e.target.name]: e.target.value}) }
                value={ this.state.newCountryName }
                placeholder="enter name"
                autoFocus
                autoComplete='off'
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ this.handleModalClose }>
              Close
            </Button>
            <Button variant="primary" onClick={ this.handleAdd }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NewCountry;