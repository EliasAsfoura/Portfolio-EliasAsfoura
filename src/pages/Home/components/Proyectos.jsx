import fotoTcnWeb from "../assets-home/fotoTcnWeb.png"
import fotoRutransWeb from "../assets-home/fotoRutransWeb.png"
import PreviewArcade from "../assets-home/PreviewArcade.png"
import "../../../styles/Proyectos.css"

const Proyectos = () => {

    return (
        <div className="ProyectosBox">
            <div className="ConfigTitulos">
                <h1>Proyectos</h1>
                <div className="linea-decorativa" aria-hidden="true"></div>
            </div>
            <div className="CardProyectos">

                <img src={fotoTcnWeb} alt="" className="imgProyecto" />

                <div>
                    <h3>Landing Page para Transporte Cargas del Norte <p style={{ fontWeight: 700 }}> (React, MUI, TS, NodeJS) </p> </h3>
                    <a href="https://transportecargasdelnorte.com" className="links">Pagina Web</a>
                </div>

            </div>
            <div className="CardProyectos">

                <img src={fotoRutransWeb} alt="" className="imgProyecto" />

                <div>
                    <h3>Landing Page para Rutrans<p style={{ fontWeight: 700 }}> (React, MUI, TS, NodeJS) </p> </h3>
                    <a href="https://rutranssrl.com" className="links">Pagina Web</a>
                </div>

            </div>

            <div className="CardProyectos">

                <img src={PreviewArcade} alt="" className="imgProyecto" />

                <div>
                    <h3>Proyecto con Claude Code <p style={{ fontWeight: 700 }}> (React, Next.js, TS, NodeJS, SDD, Supabase, Vercel, AI) </p> </h3>
                    <a href="https://arcade-vault-nu.vercel.app/" className="links">Pagina Web</a>
                </div>

            </div>

        </div>
    )

}

export default Proyectos;