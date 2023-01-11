import { useNavigate } from "react-router-dom"

function Hero() {
    let navigate = useNavigate();
    
    return(
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3" id="hero">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-1 fw-bold">Zack Andrews</h1>
                <p className="lead fw-normal">Full-stack Developer</p>
                <button onClick={() => {navigate('/about')}} className="btn btn-outline-secondary">About Me</button>
            </div>
        </div>
    )
}

export default Hero
