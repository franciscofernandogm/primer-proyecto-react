import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {changeCatching} from '../../features/tasks/taskSlice.js'
//siempre poner el nombre de una función en PascalCase

export function PokemonCard({id, name,types, img, isCatching}){

    const dispatch = useDispatch();

    const [state,setState]=useState({
        text:isCatching?'Atrapado':'Atrapar'
    })
    
    const handleClick=()=>{
        const change=!isCatching
        setState({
            ...state,
            //el isCatching que toma es el antes de ser cambiado
            text:change?'Liberar':'Atrapar'
        })
        dispatch(changeCatching({change, id}))
    }

    const handleMouseOver=()=>{
        if(isCatching){
            setState({
                ...state,
                text:'Liberar'
            })
        }
    }

    const handleMouseOut=()=>{
        if(isCatching){
            setState({
                ...state,
                text:'Atrapado'
            })
        }
    }

    const buttonClassName=isCatching
    ? 'tw-followCard-button is-following':'tw-followCard-button'

    return(
        <article className='tw-follow-card'>
            <img alt={name} src={img}/>
            <div className='tw-follow-card-name'>
                <h5>{name}</h5>
                <p>
                    {types}
                </p>
            </div>
            <div className={buttonClassName}>
                <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {state.text}
                </button>
            </div>
        </article>
    )
}