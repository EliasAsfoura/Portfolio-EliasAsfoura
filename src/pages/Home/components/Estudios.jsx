import { estudios } from "../../../utils/estudiosData";
import "../../../styles/Estudios.css"


const Estudios = () => {

    return (

        <div className="EstudiosBox">
            <div className="ConfigTitulos">
                <h1>Estudios</h1>
                <div className="linea-decorativa" aria-hidden="true"></div>
            </div>
            <div className="EstudiosList">
                {estudios.map((item, index) => (
                    <div key={index} className="EstudioCard">
                        <h3>{item.titulo} {item.link && (
                            <a target="_blank" href={item.link}>Ver Certificado</a>
                        )}</h3>
                        <p ><strong>{item.institucion}</strong></p>
                        <p>{item.año}</p>
                        {item.descripcion && <p className="descripcion">{item.descripcion}</p>}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Estudios;