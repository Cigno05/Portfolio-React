import imgProfile from '/img/img-profile.png'

function Hero() {

    return (
        <>
            <div id="hero">
                <div className="container-fluid">

                    <div className="row img-name">
                        <div className="col-auto">
                            <img src={imgProfile} alt="" className='img-profile' />
                        </div>

                        <div className="col-auto">

                            <h1 className="hero-title">Paolo Calcagni</h1>
                        </div>
                    </div>
                    <div className="row hero-contact">

                        <div className='col-auto hero-phone'>
                            <span className='title-contact'>Tel: </span><span className='text-contact'>+39  3495048162</span>
                        </div>
                        <div className='col-auto hero-mail'>
                            <span className='title-contact'>Email: </span><span className='text-contact'>paolocalcagni.82@gmail.com</span>
                        </div>
                        <div className='col-auto hero-residence'>
                            <span className='title-contact'>Residenza: </span><span className='text-contact'>Velletri, Roma, Italy</span>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero