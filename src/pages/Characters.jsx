// import '../navegation/nav';
import '../components/cards';
import './characters.css';
import Navigation from '../components/navegation';
import Filter from '../components/filter';
import Card from '../components/cards';
import { useState, useEffect } from 'react';


export default function Characters(){
    const filterList=["Character Alive","Character Dead","Female","Male","Origin Unknown"]
    const [data,setData] = useState([])
    const [fullData,setfullData] = useState([])
    const [filters, setFilters] = useState([])
    let [hide, setHide] =useState(false);

    const api=async()=>{
        //busco info a la api, la paso a json y le cambio el estado a mi variable data
        let info = await fetch("https://rickandmortyapi.com/api/character")
        .then((resp)=> {return resp.json()})
        .catch((err)=> err.json())
        setData(info.results)
        setfullData(info.results)
    }

    const applyFilters=(inputData)=>{
        //se ejecuta cuando pulsamos un filtro
        let pushed = inputData.checked;
        let filterPushed = inputData.value;
        // Acceder al label relacionado con este checkbox
        let label = inputData.parentElement.querySelector('label');
        if(pushed){
            //tomo la lista de filtros y le agrego el filtro pulsado
            setFilters([...filters, filterPushed]) 
            //tomo el filtro pulsado y le agrego la clase de activo  
            label.classList.add("active-label");
            document.getElementById(filterPushed).classList.add('active-checkbox');
           
        }else{           
            //en caso de que lo desmarque retorno los filtros a mi estado filters menos el recien demarcado y a data lo restauro con todos los filtros
            let filtersUpdated=filters.filter((fil)=>{return fil !== filterPushed})
            setData(fullData)
            //actualizo la lista de filtros sin el filtro que se desmarco
            setFilters(filtersUpdated)
            //tomo el filtro pulsado y le saco la clase de activo 
            label.classList.remove("active-label"); 
            document.getElementById(filterPushed).classList.remove('active-checkbox');
        }
    } 
    
    useEffect(()=>{api()},[])//traigo a los personajes de mi api apenas carga el componente
    useEffect(()=>{
        //por cada vez que se pulse un filtro recorro data mi estado de filtros 'filters' y retorno a data el que haya sido marcado
        filters.forEach((fil) => {
            let list = [];

        switch(fil){  
            case 'Male':
                list = data.filter((pj)=>{return pj.gender==='Male'}); 
                break;
            case 'Female':
                list = data.filter((pj)=>{return pj.gender==='Female'}); 
                break;
            case 'Character Alive':
                list = data.filter((pj)=>{return pj.status==='Alive'}); 
                break;
            case 'Character Dead':
                list = data.filter((pj)=>{return pj.status==='Dead'}); 
                break;
            case 'Origin Unknown':
                list = data.filter((pj)=>{return pj.origin.name==='unknown'});
                break;
            default:
            }
            setData(list);
        })   
    },[filters])

    return (    
            <div className='bg'>
                <Navigation/>
                
                <h2 className='m-2 p-2 fs-1 text-white'>filters</h2>

                {/* menu hamburguesa */}
                <div className='burger container-sm ' >
                    <h2 className='p-2'>filters</h2>
                    <svg onClick={() => setHide(!hide)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                {hide?'':
                <form className='container-sm p-2 pt-0 mt-4 '>
                    <div className=" row gap-2 justify-content-center">
                    {
                        filterList.map((filter )=>{
                        //le paso la lista de filtros a usar para que los renderice
                        //uso el mismo nombre del filtro como key
                        return<Filter key={filter} title={filter} filter={applyFilters}/>
                        })
                    }
                    </div>
                </form>
                }
                <main className=' d-flex justify-content-center align-items- center gap-2 flex-wrap'>
                {
                    data.length > 0?
                    //compruebo que haya al menos 1 elemento en mi array para mostrar
                    data.map((character)=>{
                        // le paso la lista de character de la api para renderizar
                        //uso el id como key de la lista
                        return( <Card key={character.id} character={character} /> )
                    })
                    :<div class=" alerta container d-flex justify-content-center align-items-center ">
                        <p class="alerta text-center">
                        <i class="bi bi-exclamation-diamond-fill"></i> 
                        Sorry! There are no characters width all those properties.</p>
                    </div>   
                }
                </main>  
            </div>
    )
}