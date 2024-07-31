import Hero from "./Hero"
import Card from "./partials/Card"

function Main() {

    return (
        <>
            <main id="main">
                
                <Hero></Hero>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Card></Card>

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Main