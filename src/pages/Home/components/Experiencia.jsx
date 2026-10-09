import FotoCv from "../assets-home/FotoCv.jpeg"
import "../../../styles/Experiencia.css"
import { LinkedIn } from "../assets-home/LogoLinkedin"
import { GitHub } from "../assets-home/LogoGitHub"


const Experiencia = () => {

    return (

        <div className="ExpBox">

            <title>Experiencia</title>

            <img src={FotoCv} alt="IMG-ME" className="AvatarStyle" />

            <h2 style={{ fontWeight: 700 }}>Hola, Soy <span style={{ color: "#0378e6", textShadow: "2px 2px 4px black", }}>Elías </span> </h2>

            <div style={{ lineHeight: "1.3", fontSize: "1.2rem", fontWeight: 300 }}>
                <p style={{ color: "#0285ff", fontWeight: 800, WebkitTextStroke: "1px black", margin: "0px" }}>
                    Programador recibido de la Universidad Tecnológica Nacional.
                </p>
                <p style={{ fontWeight: 500, margin: "0 0 4px 0" }}>
                    Desarrollador Full Stack (React, JavaScript, TypeScript, Node.js).
                </p>
                <p style={{ margin: 0, marginBottom: "10px" }}>
                    Especializado en el desarrollo de aplicaciones web.
                </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>

                <a href="https://www.linkedin.com/in/hugo-el%C3%ADas-asfoura-assaff-ab9731303/" target="_blank" rel="noopener noreferrer" className="buttonLinkedin"> <LinkedIn /> Linkedin</a>

                <a href="https://github.com/EliasAsfoura" target="_blank" rel="noopener noreferrer" className="buttonGitHub"><GitHub /> GitHub</a>

            </div>

        </div>

    )

}

export default Experiencia;