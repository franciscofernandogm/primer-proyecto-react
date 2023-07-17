import './App.css'

//siempre poner el nombre de una función en PascalCase

export function TwitterFollowCard({name,userName, img, isFollowing}){
    return(
        <article className='tw-follow-card'>
            <img alt="Foto de Usuario" src={img}/>
            <div>
                <h4>{name}</h4>
                <span>
                    @{userName}
                </span>
            </div>
            <div>
                <button>
                    Seguir
                </button>
            </div>
        </article>
    )
}