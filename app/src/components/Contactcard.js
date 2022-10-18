


function Contactcard() {
    return(
    <div className="container contact-card-wrapper">
        <div className="row vh-100 justify-content-center align-content-center">
            <div className="col-12 col-md-8">
                <div className="card text-bg-dark">
                    <img src="/img/my-project.jpg" className="card-img w-100 opacity-75" alt="space background"/>
                    <div className="card-img-overlay d-flex flex-column align-items-center">
                        <img src="/img/andrews-zack.jpg" className="rounded-5 w-75 p-5" alt="headshot" id="headshot"/>
                        <div className="card-body w-100 rounded-3" id="opbg">
                            <h1 className="card-title text-center mb-0 pb-0" id="name">Zack Andrews</h1>
                            <p className="card-text text-center" id="job-title"><small>Full Stack Developer</small></p>
                            <div className="row h-25 pt-5 mt-5">
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="mailto:zachary.andrews.au19@gmail.com"><img src="/img/envelope.svg" alt="email" id="email" className="bi bi-envelope w-100" height="60" fill="currentColor"/></a>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="tel:386-717-7144"><img src="/img/telephone.svg" alt="phone" id="phone" className="bi bi-telephone w-100" height="60" fill="currentColor"/></a>
                                </div>
                                <div className="col-4 d-flex justify-content-center align-items-center">
                                    <a href="andrews-zack.github.io"><img src="/img/globe2.svg" alt="website" id="website" className="bi bi-globe2 w-100" height="60" fill="currentColor"/></a>
                                </div>
                            </div>
                            <div className="row h-25 pt-5 mt-2">
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <a href="https://mobile.twitter.com/zachary__alan"><img src="/img/twitter.svg" alt="twitter" id="twitter" className="bi bi-twitter w-100" height="60" fill="currentColor"/></a>
                                </div>
                                <div className="col-6 d-flex justify-content-center align-items-center">
                                    <a href="https://github.com/andrews-zack"><img src="/img/github.svg" alt="github" id="github" className="bi bi-github w-100" height="60" fill="currentColor"/></a>
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


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Styleguide</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div className="container contact-card-wrapper">
//         <div className="row vh-100 justify-content-center align-content-center">
//             <div className="col-4">
//                 <div className="card text-bg-dark">
//                     <img src="/img/my-project.jpg" className="card-img w-100 opacity-75" alt="space background">
//                     <div className="card-img-overlay d-flex flex-column align-items-center">
//                         <img src="/img/temp-headshot.jpeg" className="rounded-circle w-75 p-5" alt="funny headshot">
//                         <div className="card-body w-100 rounded-3" id="opbg">
//                             <h1 className="card-title text-center mb-0 pb-0" id="name">Zack Andrews</h2>
//                             <p className="card-text text-center" id="job-title"><small>Full Stack Developer</small></p>
//                             <div className="row h-25 pt-5 mt-5">
//                                 <div className="col-4 d-flex justify-content-center align-items-center">
//                                     <a href="mailto:zachary.andrews.au19@gmail.com"><img src="/img/envelope.svg" alt="email" id="email" className="bi bi-envelope" height="60" fill="currentColor"></a>
//                                 </div>
//                                 <div className="col-4 d-flex justify-content-center align-items-center">
//                                     <a href="tel:386-717-7144"><img src="/img/telephone.svg" alt="phone" id="phone" className="bi bi-telephone" height="60" fill="currentColor"></a>
//                                 </div>
//                                 <div className="col-4 d-flex justify-content-center align-items-center">
//                                     <a href="andrews-zack.github.io"><img src="/img/globe2.svg" alt="website" id="website" className="bi bi-globe2" height="60" fill="currentColor"></a>
//                                 </div>
//                             </div>
//                             <div className="row h-25 pt-5 mt-2">
//                                 <div className="col-6 d-flex justify-content-center align-items-center">
//                                     <a href="https://mobile.twitter.com/zachary__alan"><img src="/img/twitter.svg" alt="twitter" id="twitter" className="bi bi-twitter" height="60" fill="currentColor"></a>
//                                 </div>
//                                 <div className="col-6 d-flex justify-content-center align-items-center">
//                                     <a href="https://github.com/andrews-zack"><img src="/img/github.svg" alt="github" id="github" className="bi bi-github" height="60" fill="currentColor"></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
// </body>
// </html>