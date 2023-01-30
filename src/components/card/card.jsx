import {Card, Button} from 'react-bootstrap'

const CardCharacter = ({name, height, mass, onDelete}) => {
  return (
    <Card role='cardCharacter' className="w-50 mx-auto my-3 d-flex flex-row text-white bg-secondary px-3">
      <Card.Body>
        <Card.Title className='border-bottom border-light w-50 pb-1'>{name}</Card.Title>
        <Card.Text className='my-0'>
          Height: {height}cm
        </Card.Text>
        <Card.Text>
          Mass: {mass}kg
        </Card.Text>
      </Card.Body>
      <Button className='h-25 my-auto opacity-75' 
        variant="danger"
        onClick={() => onDelete(name)}>Borrar
      </Button>  
    </Card>
  );
}

export default CardCharacter;