import React, {useEffect} from 'react'
import { FormCharacter, CardCharacter, Header } from '../../components'
import { useDispatch, useSelector} from 'react-redux'
import { charactersSelector, findCharacters, setDeleteCharacter, setLoading, setCharacters, setError} from '../../features/characters/charactersSlice'
import {Spinner} from 'react-bootstrap'
import { fetchCharacter } from '../../utils'



const Home = () => {

    const dispatch = useDispatch();

    const {loading, error, characters, searchedCharacters} = useSelector(charactersSelector)

    useEffect(() => {
        dispatch(setLoading());

        fetchCharacter().then((response) => {
            dispatch(setCharacters(response.data.results));
        })
        .catch((err) => {
            dispatch(setError());
        });
    },[dispatch])

    // Conditional rendering
    const renderAllCharacters = () => {

        if(loading) return (
            <div data-testid='loading' className='text-center mt-5'>
                <Spinner 
                    animation="grow" 
                    variant="light" 
                />
            </div>)

        if(error) return <strong>Characters not available</strong>

        if(characters) return (
            characters.slice(0).reverse().map((c) => 
                <CardCharacter 
                    key={c.name} 
                    name={c.name} 
                    height={c.height} 
                    mass={c.mass}
                    onDelete={onDelete}
                    filter={false}
                />
            )
        )

    }

    // Delete character
    const onDelete = (characterName) => {
        let result = characters.filter((c) => c.name !== characterName);
        dispatch(setDeleteCharacter(result))
    }


    return (
        <>
            <Header 
                title={'Challenge - Martin Sanchez'}
                subtitle={'Encuentre su personaje de Star Wars'}
            />
            <FormCharacter 
                characters={characters} 
                dispatch={dispatch} 
                findCharacters={findCharacters} 
                setCharacters={setCharacters}
            />
            {/* Conditional rendering  */}
            {searchedCharacters.length >= 1 
                ? searchedCharacters.map((c) => 
                    <CardCharacter key={c.name} 
                        name={c.name} 
                        height={c.height} 
                        mass={c.mass} 
                        filter={true}
                        onDelete={onDelete} />) 
                :   <>{renderAllCharacters()}</>
            }

        </>
    )
}

export default Home
