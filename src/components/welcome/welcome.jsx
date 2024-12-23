import './welcome.css';
import ButtonHome from '../buttonsHome';

export default function Welcome(){
    return (
        <section className='bg  d-flex align-items-center justify-content-center p-5 '>
            <div className="contenedor text-center ">
                <h1 className="text-uppercase fs-1 fw-bold ">final proyect front-end</h1>
                <h2 className="text-uppercase fs-2 fw-bold ">welcome to an rick and morty api!</h2>
                <p className="fs-5 fst-italic">This proyect was made for practising React and to made a functional website.</p>
                <p className="fs-5 fst-italic">In this website you can know information of the characters of this animated series.</p>
                <p className="fs-5 fst-italic">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
                <h3 className="fs-2 fw-bold text-capitalize">let's go</h3>
                {/* hago el ruteo para poder cambiar de paginas */}
                <div className='d-flex gap-2 justify-content-center'>
                    <ButtonHome url={'/Characters'} txt={'characters'}></ButtonHome>
                    <ButtonHome url={'/Contact'} txt={'contact'}></ButtonHome>
                    
                </div>
                
                
                {/* <Link to={'/Characters'} type="button" className=" btn text-uppercase ">characters</Link > */}
                
            </div>
        </section>  
    )
}