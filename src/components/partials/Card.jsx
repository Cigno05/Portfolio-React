

function Card({title, imgUrl, description, technologies}) {


    return (
        <>
            <div id="card" className="card mb-4">
                <div className="row g-0">
                    <div className="card-img-container">
                        <img src={imgUrl} className="rounded-start card-img" alt="..."></img>
                    </div>
                    <div className="card-body-container">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <span className="card-tech">Tecnologie usate:</span>
                            <div className="d-flex flex-wrap gap-3">
                            {technologies.sort().map((tech) => (
                                
                                <img className="img-tech" src={`/img/${tech}.png`} alt=""></img>
                                
                            ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card