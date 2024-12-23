import Navigation from "../components/navegation"


export default function NotFound(){
    return(
        <div className="bg">
            <Navigation></Navigation>
            
            <div class=" alerta container d-flex justify-content-center align-items-center ">
                <p class="alerta text-center">
                <i class="bi bi-exclamation-diamond-fill"></i> Sorry! This is not a valid page</p>
            </div>   
        </div>
    )
}