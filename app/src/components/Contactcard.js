


function Contactcard() {
    return(
    <div className="container contact-card-wrapper">
        <div className="row vh-100 justify-content-center align-content-center">
            <div className="col-12 col-md-8 col-lg-6">
                <div className="card text-bg-dark">
                    <img src="/img/my-project.jpg" className="card-img w-100 opacity-75" alt="space background"/>
                    <div className="card-img-overlay d-flex flex-column align-items-center">
                        <img src="/img/andrews-zack.jpg" className="rounded-5 w-75 p-5" alt="headshot" id="headshot"/>
                        <div className="card-body w-100 rounded-3" id="opbg">
                            <h1 className="card-title text-center mb-0 pb-0" id="name">Zack Andrews</h1>
                            <p className="card-text text-center" id="job-title"><small>Full Stack Developer</small></p>
                            <div className="row h-25 pt-5 mt-5">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="mailto:zachary.andrews.au19@gmail.com"><img src="/img/envelope.svg" alt="email" id="email" className="bi bi-envelope" fill="currentColor"/></a>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="tel:386-717-7144"><img src="/img/telephone.svg" alt="phone" id="phone" className="bi bi-telephone" fill="currentColor"/></a>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="andrews-zack.github.io"><img src="/img/globe2.svg" alt="website" id="website" className="bi bi-globe2" fill="currentColor"/></a>
                                </div>
                            </div>
                            <div className="row h-25 pt-5 mt-2">
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <a href="https://mobile.twitter.com/zachary__alan"><img src="/img/twitter.svg" alt="twitter" id="twitter" className="bi bi-twitter" fill="currentColor"/></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <a href="https://github.com/andrews-zack"><img src="/img/github.svg" alt="github" id="github" className="bi bi-github" fill="currentColor"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contactcard


