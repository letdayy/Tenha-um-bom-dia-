import "./Home.css";
import Anime from "../images/anime.png";


const Home = () => {

    let msg = "Espero que você tenha um bom dia! <3";


    const botao = () => {
        document.querySelector(".text").innerHTML = msg;
    }




    return (
        <div className="Home">
            <h1>Seja bem vindo! </h1>
                <img
                    src={Anime} />
                <a href="hello">Clique aqui para receber uma mensagem</a>
                <p>Não conseguiu?</p>
                <button onClick={botao}>Tente aqui</button>
                <p className="text"></p>
        </div>
    )
}

export default Home;