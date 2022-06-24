import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import Cards from "./Cards";
import InfoCards from "./InfoCards";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <Sidenav />
        <Navbar />
        <Cards />
        <InfoCards />
      </div>
    </div>
  );
}

export default Main;
