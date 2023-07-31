import {useEffect, useState} from 'react'

//siempre poner el nombre de una función en PascalCase

export function PokemonCard({id, name,types, img, isCatching, changeIsCatching}){

    const [state,setState]=useState({
        text:isCatching?'Atrapado':'Atrapar'
    })
    
        

    const handleClick=()=>{
        setState({
            ...state,
            //el isFollowing que toma es el antes de ser cambiado
            text:!isCatching?'Liberar':'Atrapar'
        })
        changeIsCatching(!isCatching, id)
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
                <span>
                    {types}
                </span>
            </div>
            <div className={buttonClassName}>
                <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {state.text}
                </button>
            </div>
        </article>
    )
}