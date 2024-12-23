import './cards.css';
import { useState } from 'react';

export default function Card({character}) {
    // console.log(character);
    //variable 'hide' para usar el operador ternario, cuando esta true un boton se muestra mientras que el otro se oculta, cada vez que se oprime el boton cambian sus valores
    let [hide, setHide] =useState(true);
    return(
        //d-flex justify-content-between align-items-center
        <div className=' tarjeta'>
            <div>
                <img src= {character.image} alt="image.jpg" />
                <h2>{character.name}</h2>
                {hide? <div className='d-flex justify-content-end' >
                                <div className='button-card'onClick={() => setHide(!hide)}>Know More...</div>
                        </div>
                : ''}               
            </div>
            {hide? ''  :
                <div className='p-2 justify-content-end'>
                    <div className=' d-flex justify-content-end' >
                        <div className='button-card m-1'onClick={() => setHide(!hide)}>X</div>
                    </div>
                    <ul>
                        <li>
                            <h3>Character Status {character.status}</h3>
                        </li>

                        <li>
                            <h3>Species</h3>
                            <p>{character.species}</p>
                            
                        </li>

                        <li>
                            <h3>Origin</h3>
                            <p>{character.origin.name}</p>
                        </li>

                        <li>
                            <h3>Character Gender </h3>
                            <p>{character.gender}</p>
                        </li>
                    </ul>
                </div>
            }  
        </div> 
    )
}
