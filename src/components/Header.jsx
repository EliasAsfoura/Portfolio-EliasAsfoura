
import { useEffect, useState } from "react";
import "../styles/Header.css";

const sectionIds = [
  "inicio",
  "proyectos",
  "estudios",
  "softskills",
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      // Línea imaginaria que determina la sección actual.
      const marker = window.scrollY + window.innerHeight * 0.35;

      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const sectionTop =
            element.getBoundingClientRect().top + window.scrollY;

          if (sectionTop <= marker) {
            currentSection = id;
          }
        }
      });

      // Si llegamos al final de la página, activar la última sección.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <button
          className={activeSection === "inicio" ? "active" : ""}
          aria-current={activeSection === "inicio" ? "location" : undefined}
          onClick={() => scrollToSection("inicio")}
        >
          Inicio
        </button>

        <button
          className={activeSection === "proyectos" ? "active" : ""}
          aria-current={activeSection === "proyectos" ? "location" : undefined}
          onClick={() => scrollToSection("proyectos")}
        >
          Proyectos
        </button>

        <button
          className={activeSection === "estudios" ? "active" : ""}
          aria-current={activeSection === "estudios" ? "location" : undefined}
          onClick={() => scrollToSection("estudios")}
        >
          Estudios
        </button>

        <button
          className={activeSection === "softskills" ? "active" : ""}
          aria-current={activeSection === "softskills" ? "location" : undefined}
          onClick={() => scrollToSection("softskills")}
        >
          Soft Skills
        </button>
      </nav>
    </header>
  );
};

export default Header;