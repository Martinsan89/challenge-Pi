import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { Form, Button} from 'react-bootstrap'
import {House} from 'react-bootstrap-icons'
import { ModalCharacter } from '../../components';
import { setHome } from '../../features/characters/charactersSlice';

const formCharacter = ({characters, dispatch, findCharacters }) => {

  const {register, handleSubmit, formState:{errors}, reset } = useForm();

  const [characterNotFound, setCharacterNotFound] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const onSubmit = (data) => {

    let result = characters.filter(
      c => c.name.toLowerCase().includes(data.name)
    );

    if(result.length === 0) setCharacterNotFound(true);

    dispatch(findCharacters(result));
    reset({name: ''});
  }

  const backHome = () => {
    dispatch(setHome())
  }

  return (
    <div className='w-50 mx-auto my-3 d-flex justify-content-between '>
      <div className='d-flex flex-column'>
        <Form className="gap-3 d-flex" size='lg' onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='w-100'>
            <Form.Control className='mb-2 opacity-75 h-100'
              placeholder="Ingrese un nombre"
              type='text'
              onFocus={()=> setCharacterNotFound(false)}
              {...register('name',{required: true, minLength: 2})}
            />
          </Form.Group>
          <Button type='submit' variant="outline-light" id="button-addon2">
            Buscar
          </Button>
        </Form>
        <div className='my-2'>
          {errors.name && (
            <span className='text-white'>Ingrese 2 letras. </span>
          )}
          {characterNotFound && (
            <span className='text-warning'>No se encontró el personaje. </span>
          )}
        </div>
      </div>
      {/* House button */}
      <div>
        <Button variant='outline-light' onClick={backHome}><House /></Button>
      </div>
      {/* Modal button */}
      <Button 
        onClick={() => {setModalShow(true), setCharacterNotFound(false)}}
        type='button' 
        variant='outline-light' 
        className='h-25 bg-primary opacity-75'
      > Agregar
      </Button>
      <ModalCharacter 
        show={modalShow}
        onHide={() => setModalShow(false)}
        characters={characters}
      />
    </div>
  )
}

export default formCharacter
