import Navigation from '../navegation';
import './contact.css'
import { useState } from 'react';
import ButtonHome from '../buttonsHome';

export default function FormContact(){
    //setters para cada valor de mis inputs
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [text,setText]=useState('');

    const ChangeState=(nodo)=>{
        //filtro por id y hago el cambio del valor
        if(nodo.id === 'name'){ setName(nodo.value);}
        if(nodo.id === 'email'){ setEmail(nodo.value);}
        if(nodo.id === 'message'){setText(nodo.value);}
    }
    

    return(
        <div className='bg'>
            <Navigation/>
            <main class="form-container">                      
                <h1>Contact</h1>
                <p>Leave us your information so we can contact you</p>
                <form class="contact-form" action='https://formspree.io/f/xyzzywpl' method='POST'>
                    <div class="input-group" > 
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required 
                        value={name} onInput={(event)=>ChangeState(event.target)}/>
                    </div>
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" required
                        value={email} onInput={(event)=>ChangeState(event.target)} />
                    </div>
                    <div class="input-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Write your message" required
                        value={text} onInput={(event)=>ChangeState(event.target)}></textarea>
                    </div>
                    <div className='d-flex'>
                        <div type="submit" className='submit'>Send</div>
                    </div>
                    

                </form>
                
            </main>
        </div>
    )
} 

