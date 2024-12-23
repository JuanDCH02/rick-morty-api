import './nav.css';
import ButtonHome from '../buttonsHome';
import { Link,useLocation } from 'react-router';


export default function Navigation(){
    
    const location = useLocation();
    return(
        <div className='header d-flex justify-content-between container-fuid mb-5'>
            <Link to={'/'} > <h3 className='text-decoration-none'>rick & morty</h3></Link>
            
            <div className='d-flex gap-2'>
                <ButtonHome active={location.pathname === '/Characters'} url={'/Characters'} txt={'characters'}></ButtonHome>
                <ButtonHome active={location.pathname === '/Contact'} url={'/Contact'} txt={'contact'}></ButtonHome>
            </div>
            
        </div>
    )
}