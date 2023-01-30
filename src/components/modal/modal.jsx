import React,{useState} from 'react'
import {Modal,Button, Form} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { useDispatch} from 'react-redux'
import { setCharacters } from '../../features/characters/charactersSlice'


const  ModalForm = (props) => {

    const {register, handleSubmit, formState:{errors}, reset } = useForm();

    const [added, setAdded] = useState(false)
    const [errorAdd, setErrorAdd] = useState(false)

    const dispatch = useDispatch();

    const addCharacter = (character) => {
        if (props.characters.find((c) => c.name === character.name )) {
            return (setErrorAdd(true), reset({name: '', height: '', mass: ''}) )
        } else {
            dispatch(setCharacters([...props.characters, character]))
            reset({name: '', height: '', mass: ''});
            setAdded(true);
            setErrorAdd(false)
        }
    }

    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={()=> {
                setAdded(false),
                setErrorAdd(false),
                reset({name: '', height: '', mass: ''})}}>
            </Modal.Header>
            <Modal.Body>
                <Modal.Title className='text-center'>
                    Agregue el personaje.
                </Modal.Title>
                <Form 
                    className="w-50 mx-auto my-5 h-75 d-flex flex-column" 
                    size='lg' 
                    onSubmit={handleSubmit(addCharacter)}
                    >
                    <Form.Group className='text-center'>
                    <Form.Control className='my-3 opacity-75 text-center'
                        placeholder="Nombre"
                        type='text'
                        {...register('name',{required: true})}
                        onFocus={()=>{setAdded(false), setErrorAdd(false)}}
                    />
                    {errors.name && (<span className='text-danger'>Ingrese un nombre </span>
                    )}
                    <Form.Control className='my-3 opacity-75 text-center'
                        placeholder="Height"
                        type='number'
                        {...register('height')}
                    />
                    <Form.Control className='my-3 opacity-75 text-center'
                        placeholder="Mass"
                        type='number'
                        {...register('mass')}
                    />
                    </Form.Group>
                    <Button className='w-50 mx-auto my-3' type='submit'>Agregar</Button>
                </Form>
            </Modal.Body>
            <div className='p-3 text-center bg-secondary'>
                {added && (
                    <h4 className='text-light'>Personaje agregado! </h4>
                )}
                {errorAdd && (
                    <h4 className='text-warning'>El personaje ya se encuentra en la lista.  </h4>
                )}
            </div>
        </Modal>
    );
}

export default ModalForm;