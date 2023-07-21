import {useState} from 'react'

//siempre poner el nombre de una función en PascalCase

export function TwitterFollowCard({name,userName, img}){

    const [state,setState]=useState({
        isFollowing:false,
        text:'Seguir',
    })

    const handleClick=()=>{
        setState({
            ...state,
            isFollowing:!state.isFollowing,
            //el isFollowing que toma es el antes de ser cambiado
            text:state.isFollowing?'Seguir':'Dejar de Seguir'
        })
    }

    const handleMouseOver=()=>{
        if(state.isFollowing){
            setState({
                ...state,
                text:'Dejar de Seguir'
            })
        }
    }

    const handleMouseOut=()=>{
        if(state.isFollowing){
            setState({
                ...state,
                text:'Siguiendo'
            })
        }
    }

    const buttonClassName=state.isFollowing
    ? 'tw-followCard-button is-following':'tw-followCard-button'

    return(
        <article className='tw-follow-card'>
            <img alt="Foto de Usuario" src={img}/>
            <div>
                <h4>{name}</h4>
                <span>
                    @{userName}
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