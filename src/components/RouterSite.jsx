import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Characters from '../pages/Characters';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/404';
//import CharacterProvider from './context';
//importo el provider de mi contexto y lo aplico en characters para que el y sus hijos puedan usarlo

export default function RouterSite(){
    return(
        <Router>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Characters' element={<Characters/>} />
                <Route path='/Contact' element={<Contact/>} />
                {/* cualquier otro path, muestra pagina 404 */}
                <Route path='*' element={<NotFound/>} />
            </Routes>

        </Router>
    )
}