import './filtros.css';


export default function Filter({title,filter}){

    return(
        <div className='col-12 col-md-2 form-check form-switch filtros text-center justify-content-center'>
            <input className='form-check-input' id={title} type='checkbox' 
            onClick={(event)=>filter(event.target)} value={title}/>
            <label className='form-check-label'id={title} htmlFor={title}>{title}</label>       
        </div>
    )
}