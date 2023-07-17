import foto1 from './img/foto-perfil-1.jpg';
import foto2 from './img/foto-perfil-2.jpg';
import foto3 from './img/foto-perfil-3.jpeg';
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import './App.css'

export function App(){
    return(
        <section id='tw-follow'>
            <h2>Recomendaciones</h2>
            <TwitterFollowCard 
                name="Francisco Gavilan" 
                userName="ffgavilanm" 
                img={foto1}
                isFollowing="True"/>
            <TwitterFollowCard 
                name="Grecia Cuyubamba" 
                userName="gacuyubambab" 
                img={foto2}
                isFollowing="True"/>
            <TwitterFollowCard 
                name="Alessia Montalvan" 
                userName="alemontalvan" 
                img={foto3}
                isFollowing="True"/> 
        </section>
    )
}