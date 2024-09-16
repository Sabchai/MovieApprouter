

import Header from "./Header";
const Home = () => {
    return ( 
        <div className="home">
            <Header></Header>
            <section className="cont">
                <div className="img"><img src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oL4IGFb1A8EQyOXZkxlRIVaRQhu.jpg" alt="Infierno Azul" /></div>
                <div className="desc">
                    <p>2021</p><br />
                    <h2>Infierno azul</h2><br />
                    <p>Nancy (Blake Lively) es una joven que trata de superar la pérdida de su madre. Un día, practicando surf en una solitaria playa mexicana se queda atrapada en un islote a sólo cien metros de la costa. El problema está en que un enorme tiburón blanco se interpone entre ella y la otra orilla.</p><br />
                    <p>Terror, Drama, Suspense 1h 26m</p><br />
                    <button>Watch trailer</button>
                </div>
            </section>
        </div>
     );
}


export default Home;
