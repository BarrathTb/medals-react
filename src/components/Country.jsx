import React, { Component } from 'react';
import { TrashFill } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Medal from './Medal';


class Country extends Component {
  getMedalsTotal(country, medals) {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }
  render() { 
    const { country, medals, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <Card className->
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span>
            { country.name }
            <Badge bg="secondary" text="light" pill className="ms-2">
              { this.getMedalsTotal(country, medals) }
            </Badge>
            </span>
            <TrashFill onClick={() => onDelete(country.id)} className='icon-btn' style={{ color:'red' }} />
          </Card.Title>
          <ListGroup variant="flush">
          { medals.map(medal =>
          <ListGroup.Item className="d-flex justify-content-between" key={ medal.id }>
            <Medal  
              country={ country } 
              medal={ medal } 
              onIncrement={ onIncrement } 
              onDecrement={ onDecrement } />
          </ListGroup.Item>
          ) }
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

export default Country;
