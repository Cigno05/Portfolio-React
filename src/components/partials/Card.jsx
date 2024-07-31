

function Card({title, imgUrl, description, technology}) {
    

    return (
        <>
            <div id="card" className="card">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={imgUrl} class="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><small class="text-body-secondary">{technology}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card