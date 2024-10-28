import { FaAws } from "react-icons/fa";
import { SiCsharp, SiPhp, SiMysql, SiPython } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container mt-4">
      <h4 className="text-center">My Technical Skills</h4>
      <div className="d-block d-md-flex flex-wrap justify-content-center mt-3 gap-4 text-dark">
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
      </div>
    </div>
  );
};

export default Skills;
