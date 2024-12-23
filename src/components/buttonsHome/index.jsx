import { Link } from 'react-router';
import './buttonsHome.css';

export default function ButtonHome({url, txt, active}){

    return(
        //depende de la pagina en la que se encuentra le agrego la clase mark 
        <Link to={url} type="button" className={ active?'button text-uppercase mark':'button text-uppercase'}>{txt}</Link >
    )
}
