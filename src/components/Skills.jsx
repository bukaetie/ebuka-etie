import { FaAws, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiCsharp, SiPhp, SiMysql, SiPython } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center text-primary">My Technical Skills</h3>
      <div className="d-block d-md-flex flex-wrap justify-content-center mt-3 gap-4 text-body">
        <div className="text-center">
          <SiCsharp size={30} />
          <p className="mt-2 fs-6">C# Programmen</p>
        </div>
        <div className="text-center">
          <SiPhp size={30} />
          <p className="mt-2 fs-6">PHP</p>
        </div>
        <div className="text-center">
          <SiMysql size={30} />
          <p className="mt-2 fs-6">Datenbanken (SQL)</p>
        </div>
        <div className="text-center">
          <SiPython size={30} />
          <p className="mt-2 fs-6">Python Programmen</p>
        </div>
        <div className="text-center">
          <FaAws size={30} />
          <p className="mt-2 fs-6">AWS Cloud Umgebung</p>
        </div>
        <div className="text-center">
          <FaReact size={30} />
          <p className="mt-2 fs-6">React</p>
        </div>
        <div className="text-center">
          <FaNodeJs size={30} />
          <p className="mt-2 fs-6">Node.js</p>
        </div>
        <div className="text-center">
          <FaBootstrap size={30} />
          <p className="mt-2 fs-6">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
