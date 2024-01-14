import Home from "./Home";
import Tabla from "./Tabla";
import Contact from "./Contact";


function Contenedor() {
    return(
        <div id="content-wrapper" className="d-flex flex-column mb-0">
            <section>
                <Home/>
            </section>
            <section>
                <Tabla/>
            </section>
            <section>
                <Contact/>
            </section>
        </div>
    )
}

export default Contenedor;