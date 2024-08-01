import Hero from "./Hero"
import Card from "./partials/Card"

function Main() {
    const projects = [

        {
            "id": "0",
            "title": "Fooder",
            "imgUrl": "/img/Fooder.png",
            "description": "Progetto per un azienda di consegna di alimenti, con la possiblità di aggiungere ristoranti e piatti da parte del ristoratore e di selezionare prodotti, aggiungerli nel carrello e procedere al pagamento da parte del cliente",
            "technologies": [
                "html5", "css3", "bootstrap", "vuejs", "vite", "php", "laravel", "js"
            ]

        },

        {
            "id": "1",
            "title": "Game Creator",
            "imgUrl": "/img/game-creator.png",
            "description": "Progetto sulla base di un gioco di ruolo dove è possibile aggiungere, modifcare ed eliminare sa i personaggi che le loro armi ",
            "technologies": [
                "html5", "css3", "bootstrap", "vuejs", "vite", "php", "laravel", "js"
            ]

        }
    ]

    return (
        <>
            <main id="main">

                <Hero></Hero>

                <div className="container mt-4 ">
                    <div className="row">
                        <h1>I miei progetti</h1>
                    </div>
                    <div className="row">
                        {projects.map((proj) => (
                            <>
                                <div className="col-12 col-lg-6">
                                    <Card
                                        key={proj.id}
                                        title={proj.title}
                                        imgUrl={proj.imgUrl}
                                        description={proj.description}
                                        technologies={proj.technologies}
                                    ></Card>
                                </div >
                            </>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}


export default Main