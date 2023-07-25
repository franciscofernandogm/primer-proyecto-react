import {useState} from 'react'

//siempre poner el nombre de una función en PascalCase

export function PokemonFollowCard({name,types, img}){

    const [state,setState]=useState({
        isFollowing:false,
        text:'Atrapar',
    })

    const handleClick=()=>{
        setState({
            ...state,
            isFollowing:!state.isFollowing,
            //el isFollowing que toma es el antes de ser cambiado
            text:state.isFollowing?'Atrapar':'Liberar'
        })
    }

    const handleMouseOver=()=>{
        if(state.isFollowing){
            setState({
                ...state,
                text:'Liberar'
            })
        }
    }

    const handleMouseOut=()=>{
        if(state.isFollowing){
            setState({
                ...state,
                text:'Atrapado'
            })
        }
    }

    const buttonClassName=state.isFollowing
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