import { softSkills } from "../../../utils/softSkillsData";
import "../../../styles/SoftSkills.css"

const SoftSkills = () => {

    return (

        <div className="SoftSkillsBox">
            <div className="ConfigTitulos">
                <h1>Soft Skills</h1>
                <div className="linea-decorativa" aria-hidden="true"></div>
            </div>
            <div className="SoftSkillsList">
                {softSkills.map((skill, index) => (
                    <div key={index} className="SoftSkillCard">
                        <h3>{skill.titulo}</h3>
                        <p>{skill.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>

    )

}

export default SoftSkills;