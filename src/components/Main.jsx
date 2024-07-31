import Hero from "./Hero"
import Card from "./partials/Card"

function Main() {

    return (
        <>
            <main id="main">
                
                <Hero></Hero>

                <div className="container mt-4 ">
                    <div className="row">
                        <h1>I miei progetti</h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <Card
                            title='fooder'
                            imgUrl='/img/vite.svg'
                            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum cumque obcaecati id consectetur.'
                            technology='react, css. bootstrap'
                            ></Card>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Main