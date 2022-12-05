import Error from "../images/error.png";
import "./NoPage.css";



const NoPage = () => {
    return (
        <div className="NoPage">
        <h1>Página não encontrada </h1>
        <img
        src={Error} />
        </div>
    )
  };
  
  export default NoPage;