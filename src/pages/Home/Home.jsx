import Header from "../../components/Header";
import Experiencia from "./components/Experiencia"
import Proyectos from "./components/Proyectos"
import Estudios from "./components/Estudios"
import SoftSkills from "./components/SoftSkills";
import useReveal from "../../hooks/useReveal";

const Home = () => {

  const experienciaRef = useReveal();
  const proyectosRef = useReveal();
  const estudiosRef = useReveal();
  const softSkillsRef = useReveal();

  return (
    <>
      <Header />

      <section id="inicio" ref={experienciaRef} className="reveal">
        <Experiencia />
      </section>

      <section id="proyectos" ref={proyectosRef} className="reveal">
        <Proyectos />
      </section>

      <section id="estudios" ref={estudiosRef} className="reveal">
        <Estudios />
      </section>

      <section id="softskills" ref={softSkillsRef} className="reveal">
        <SoftSkills />
      </section>
    </>
  )

}

export default Home;