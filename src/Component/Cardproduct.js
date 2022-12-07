import React from 'react'
import { Button, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Cardproduct.css'

const Cardproduct = (props) => {
    const handlename = () => alert(`my name is ${props.name}`)
  return (
    <div>
<Card style={{ width: '18rem' }}>
    {props.children}
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.age}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
    <Button variant="primary" onClick={handlename}>Click Me</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

Cardproduct.propTypes = {
    age : PropTypes.number
}


Cardproduct.defaultProps = {
    name : 'yasmine'
}

export default Cardproduct